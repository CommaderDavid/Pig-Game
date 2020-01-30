// Back End
function Dice() {
  this.number;
}

Dice.prototype.rollDice = function(player, turn) {
  var score = Math.floor(Math.random() * 6) + 1;
  player.tempScore += score;
  if (score === 1) {
    this.tempReset(player);
    turn.switchTurn();
  }
  return score;
}

Dice.prototype.tempReset = function(player) {
  player.tempScore *= 0;
}

function PlayerScore() {
  this.tempScore = 0;
  this.totalScore = 0;
}

PlayerScore.prototype.addScore = function(player) {
  player.totalScore += player.tempScore;
  return player.totalScore;
}

function PlayerTurn() {
  this.currentPlayer = false;
}

PlayerTurn.prototype.switchTurn = function() {
  this.currentPlayer = !this.currentPlayer;
}
// Front End
$(document).ready(function() {
  var pigRoll = new Dice();
  var player1 = new PlayerScore();
  var player2 = new PlayerScore();
  var turn = new PlayerTurn();

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

  var pigFlip;
  if (turn.currentPlayer === false) {
    pigFlip = player1
  } else {
    pigFlip = player2
  }

  $("#roll").click(function() {
    var currentRoll = pigRoll.rollDice(pigFlip, turn);
    var currentTotal = pigFlip.tempScore;

    if (currentRoll === 1) {
      $("#current-side").empty().append(" Oh... Too bad!");
      $("#current-score").empty().append("Loooossser!");
    } else {
      $("#current-side").empty().append(" " + currentRoll);
      $("#current-score").empty().append(currentTotal);
    }
  })

  $("#hold").click(function() {
    if (turn.currentPlayer === false) {
      $("#player1-total").empty().append(pigFlip.addScore(pigFlip));
    } else {
      $("#player2-total").empty().append(pigFlip.addScore(pigFlip));
    }
    pigRoll.tempReset(pigFlip);
    console.log(pigFlip);
    turn.switchTurn();

    $("#current-side").empty();
    $("#current-score").empty();

    if (pigFlip.totalScore >= 100) {
      $("#winner").show();
      $("#winner").empty().append("Player 1 Wins!");
    }
  })
})
