// Lista dos personagens disponíveis com suas características
let characters = [
	{ name: "Mario", speed: 4, maneuverability: 3, power: 3, points: 0 },
	{ name: "Peach", speed: 3, maneuverability: 4, power: 2, points: 0 },
	{ name: "Yoshi", speed: 2, maneuverability: 4, power: 3, points: 0 },
	{ name: "Bowser", speed: 5, maneuverability: 2, power: 5, points: 0 },
	{ name: "Luigi", speed: 3, maneuverability: 4, power: 4, points: 0 },
	{ name: "Donkey Kong", speed: 2, maneuverability: 2, power: 5, points: 0 },
];

// Função para embaralhar a lista de personagens de forma aleatória
function shuffleCharacters() {
	for (let i = characters.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[characters[i], characters[j]] = [characters[j], characters[i]];
	}
}

// Função para selecionar aleatoriamente um personagem da lista e removê-lo
function getRandomCharacter() {
	if (characters.length === 0) {
		console.log("Todos os personagens foram usados. Reinicie o programa para jogar novamente.");
		return null;
	}

	// Embaralha a lista de personagens antes de fazer a seleção
	shuffleCharacters();

	const selectedCharacter = characters.pop(); // Remove e retorna o último personagem da lista
	return selectedCharacter;
}

// Função que simula o rolar de um dado, retornando um número de 1 a 6
async function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

// Função que retorna um tipo aleatório de bloco: "Reta", "Curva" ou "Confronto"
async function getRandomBlock() {
	const random = Math.random();
	return random < 0.33 ? "Reta" : random < 0.66 ? "Curva" : "Confronto";
}

// Função que loga o resultado da rolagem de um dado para um personagem
async function logRollResult(charName, block, diceResult, attribute) {
	console.log(`${charName} rolou um dado de ${block}: 🎲${diceResult} + 🪄${attribute} = ${diceResult + attribute}`);
}

// Função principal que simula a corrida
async function playRaceEngine(char1, char2) {
	for (let round = 1; round <= 5; round++) {
		console.log(`\n🏁 Rodada ${round}`);

		// Determina o tipo de bloco da rodada
		let block = await getRandomBlock();
		console.log(`🗺️ Bloco: ${block} \n`);

		// Rola os dados para ambos os personagens
		let diceResult1 = await rollDice();
		let diceResult2 = await rollDice();

		let fullSkill1 = 0;
		let fullSkill2 = 0;

		// Lógica para o bloco "Reta"
		if (block === "Reta") {
			fullSkill1 = diceResult1 + char1.speed;
			fullSkill2 = diceResult2 + char2.speed;

			await logRollResult(char1.name, "Velocidade", diceResult1, char1.speed);
			await logRollResult(char2.name, "Velocidade", diceResult2, char2.speed);
		}
		// Lógica para o bloco "Curva"
		else if (block === "Curva") {
			fullSkill1 = diceResult1 + char1.maneuverability;
			fullSkill2 = diceResult2 + char2.maneuverability;

			await logRollResult(char1.name, "Manobrabilidade", diceResult1, char1.maneuverability);
			await logRollResult(char2.name, "Manobrabilidade", diceResult2, char2.maneuverability);
		}
		// Lógica para o bloco "Confronto"
		else {
			let powerResult1 = diceResult1 + char1.power;
			let powerResult2 = diceResult2 + char2.power;

			console.log(`${char1.name}🥊 confrontou💥 com ${char2.name}🥊!\n`);
			await logRollResult(char1.name, "Poder", diceResult1, char1.power);
			await logRollResult(char2.name, "Poder", diceResult2, char2.power);

			// Reduz pontos do personagem que perder o confronto
			char1.points -= powerResult1 < powerResult2 && char1.points > 0 ? 1 : 0;
			char2.points -= powerResult1 > powerResult2 && char2.points > 0 ? 1 : 0;

			let message;

			if (powerResult1 > powerResult2) {
				message = char2.points > 0 ? `\n${char2.name} perdeu 1 ponto 🐢!` : `\n${char2.name} tem 0 pontos 🚑!`;
			} else if (powerResult1 < powerResult2) {
				message = char1.points > 0 ? `\n${char1.name} perdeu 1 ponto 🐢!` : `\n${char1.name} tem 0 pontos 🚑!`;
			} else {
				message = `\nConfronto empatado! Nenhum ponto foi perdido`;
			}

			console.log(message);
		}

		// Determina o vencedor da rodada
		if (fullSkill1 > fullSkill2) {
			char1.points++;
			console.log(`\n${char1.name} marcou 1 ponto!`);
		} else if (fullSkill1 < fullSkill2) {
			char2.points++;
			console.log(`\n${char2.name} marcou 1 ponto!`);
		} else if (fullSkill1 === fullSkill2 && block !== "Confronto") {
			console.log(`\nEmpate!`);
		}

		console.log("---------------------------------------------------------");
	}
}

// Função que determina e imprime o vencedor da corrida
async function getWinner(char1, char2) {
	console.log(`\n🚩 Placar final: 🚩\n`);
	console.log(`${char1.name}: ${char1.points} pontos`);
	console.log(`${char2.name}: ${char2.points} pontos\n`);

	if (char1.points > char2.points) {
		console.log(`\n⭐⭐⭐ ${char1.name} venceu! ⭐⭐⭐`);
	} else if (char1.points < char2.points) {
		console.log(`\n⭐⭐⭐ ${char2.name} venceu! ⭐⭐⭐`);
	} else {
		console.log(`\n💢💢💢 Empate! 💢💢💢`);
	}
}

// Função principal que inicia a corrida
(async function main() {
	// Seleciona aleatoriamente dois personagens
	const player1 = getRandomCharacter();
	const player2 = getRandomCharacter();

	console.log(`\n🏁🚦 Corrida entre ${player1.name} e ${player2.name} começando ... \n`);

	await playRaceEngine(player1, player2);

	await getWinner(player1, player2);
})();
