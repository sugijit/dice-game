// Toglogchiin eeljiig hadgalah huvisagch, 1-r toglogchiig 0, 2-r toglogchiig 1
var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii buuh taliig tootsoj hadgalah huvisagch, 1-6 utgiig sanamsarguigeer uusgej ugnu
var diceNumber = Math.floor(Math.random() * 6) + 1;

//program ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Shoog shideh eventlistener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 hurtel sanamsargui toog gargaj avch baina
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // shoonii zurgiig web deer gargaj irne
  diceDom.style.display = "block";

  //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  // toglogchiin eeljiin onoog uurchilno (buusan too n 1-s yalgaatai bol)
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    // 1-s yalgaatai too buulaa. Nemne
  } else {
    switchPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  // ug toglogchiin tsugluulsan eeljiin onoog global onoon deer nemj ugno
  // if (activePlayer === 0) {
  //   scores[0] = scores[0] + roundScore;
  // } else {
  //   scores[1] = scores[1] + roundScore;
  // }

  scores[activePlayer] = scores[activePlayer] + roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // eeljiin onoog 0 bolgono
  switchPlayer();
});

function switchPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
