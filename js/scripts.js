// Back End
function Dice() {
  this.number;
}

Dice.prototype.rollDice = function(player) {
  var score = Math.floor(Math.random() * 6) + 1;
  player.tempScore += score;
  if (score === 1) {
    this.tempReset(player);
  }
  return score;
}

Dice.prototype.tempReset = function(player) {
  player.tempScore *= 0;
}

function PlayerScore() {
  this.tempScore = 0;
  this.totalScore = 0;
  this.currentTurn = 1;
}

PlayerScore.prototype.addScore = function(player) {
  player.totalScore += player.tempScore;
  return player.totalScore;
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
    var currentTotal = player1.tempScore;

    if (currentRoll === 1) {
      $("#current-side").empty().append(" Oh... Too bad!");
      $("#current-score").empty().append("Loooossser!");
    } else {
      $("#current-side").empty().append(" " + currentRoll);
      $("#current-score").empty().append(currentTotal);
    }
  })

  $("#hold").click(function() {
    $("#player1-total").empty().append(player1.addScore(player1));
    pigRoll.tempReset(player1);
    $("#current-side").empty();
    $("#current-score").empty();
    
    if (player1.totalScore >= 100) {
      $("#winner").show();
      $("#winner").empty().append("Player 1 Wins!");
    }
  })
})
