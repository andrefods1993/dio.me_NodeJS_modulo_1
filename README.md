<h1 align="center">Desafio de projeto: Mario Kart.JS</h1>
<div align="center">
    <img src="./docs/header.gif" alt="Mario Kart" width="200">
</div>

![image](https://github.com/andrefods1993/dio.me_NodeJS_modulo_1/assets/132412680/6a05375d-56b6-42be-aead-7c337cc5125e)


## 📎 Sumário

-   [✨ Features](#features)
-   [🗂️ Temas abordados](#topics)
-   [💡 Desafio](#challenges)
-   [🚀 Demonstração](#demo)
-   [🧑🏾‍💻 Autor](#author)

<h2 id="features">✨ Features</h2>

-   Simulação de Corrida: Cria a lógica para simular uma corrida entre os dois personagens selecionados.
-   Atributos dos Personagens: Utiliza os atributos de cada personagem (velocidade, manobrabilidade, poder) para determinar o desempenho na corrida.
-   Blocos da Pista: Implementa os diferentes blocos da pista (reta, curva, confronto) e como eles afetam o desempenho dos personagens.
-   Dados Aleatórios: Gera dados aleatórios de 1 a 6 para simular rolagens de dados durante a corrida.
-   Pontuação: Calcula e atribui pontos aos personagens com base no desempenho em cada rodada.
-   Vencedor da Corrida: Determina e imprime o vencedor da corrida com base nos pontos acumulados pelos personagens.
-   Controle de Pontos Negativos: Garante que nenhum personagem tenha pontuação negativa durante a corrida.

<h2 id="topics">🗂️ Temas abordados</h2>

-   Lógica de Programação
-   Manipulação de Dados
-   Funções Assíncronas
-   Tratamento de Erros
-   Controle de Fluxo
-   Estruturas de Dados
-   Exibição de Mensagens

<h2 id="challenges">💡 Desafio</h2>

## Objetivo

Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

<h2 id="demo">🚀 Demonstração</h2>

Para visualizar a demonstração do projeto, siga os passos abaixo:

1. Baixe o projeto do GitHub.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Navegue até o diretório do projeto no terminal.
4. Execute o arquivo JavaScript com o seguinte comando:

```bash
node index.js
```

<h2 id="author">🧑🏾‍💻 Autor</h2>

<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/132412680?v=4"/>
    <p>&nbsp&nbsp&nbspEste projeto foi desenvolvido por André Filipe Oliveira, como parte do curso de "Formação Node.js Fundamentals" na DIO.<br>
</p>
