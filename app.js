var isGameOver;
var activePlayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");
initGame();

function initGame() {
  // Toglogchiin eeljiig hadgalah huvisagch, 1-r toglogchiig 0, 2-r toglogchiig 1

  isGameOver = false;

  activePlayer = 0;

  // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
  scores = [0, 0];

  // Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
  roundScore = 0;
  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  //program ehlehed beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
}

//Shoog shideh eventlistener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver !== true) {
    // 1-6 hurtel sanamsargui toog gargaj avch baina
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";

    //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";

    // toglogchiin eeljiin onoog uurchilno (buusan too n 1-s yalgaatai bol)
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
      // 1-s yalgaatai too buulaa. Nemne
    } else {
      switchPlayer();
    }
  } else {
    alert("GAME OVER BRO! PRESS 'NEW GAME' BUTTON");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  // ug toglogchiin tsugluulsan eeljiin onoog global onoon deer nemj ugno
  if (isGameOver !== true) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchPlayer();
    }
  } else {
    alert("GAME OVER BRO! PRESS 'NEW GAME' BUTTON");
  }
});

function switchPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

//shine togloom ehluuleh tovch even listener

document.querySelector(".btn-new").addEventListener("click", function () {
  initGame();
});
