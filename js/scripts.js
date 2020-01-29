// Back End
function Dice() {
  this.number;
}

Dice.prototype.rollDice = function(player) {
  var score = Math.floor(Math.random() * 6) + 1;
  player.currentScore += score;
  if (score === 1) {
    player.currentScore *= 0;
  }
  return score;
}

function PlayerScore() {
  this.currentScore = 0;
}
// Front End
$(document).ready(function() {
  var pigRoll = new Dice();
  var player1 = new PlayerScore();
  var player2 = new PlayerScore();

  $("form#menus").submit(function(e) {
    e.preventDefault();
    var dices = $("select#dice-number").val();
    var players = $("select#player-computer").val();

    $("#start-menu").hide();
    $("#main-game").show();

    if (players === "computer") {
      $("#player-type").append("Computer")
    } else {
      $("#player-type").append("Player 2")
    }

    if (dices === "1") {
      $("#one-dice").show();
    } else {
      $("#two-dice").show();
    }
  })

  $("#roll").click(function() {
    var currentRoll = pigRoll.rollDice(player1);
    console.log(player1.currentScore);
    if (currentRoll === 1) {
      $("#current-side").empty().append(" Oh... Too bad!");
    } else {
      $("#current-side").empty().append(" " + currentRoll);
    }
  })

  $("#hold").click(function() {

  })
})
