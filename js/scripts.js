// Back End
function Dice() {
  this.number;
  this.currentScore = 0;
}

Dice.prototype.rollDice = function() {
  var score = Math.floor(Math.random() * 6) + 1;
  this.currentScore += score;
  return score;
}
// Front End
$(document).ready(function() {
  var pigRoll = new Dice();

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
    var currentRoll = pigRoll.rollDice();
    if (currentRoll === 1) {
      $("#current-side").empty().append(" Oh... Too bad!");
    } else {
      $("#current-side").empty().append(" " + currentRoll);
      console.log(pigRoll);
    }
  })

  $("#hold").click(function() {
    
  })
})
