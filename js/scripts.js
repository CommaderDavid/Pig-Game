// Back End
function Dice() {
  this.number;
  this.currentScore = 0;
}

Dice.prototype.rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
}
// Front End
$(document).ready(function() {
  $("form#menus").submit(function(e) {
    e.preventDefault();
    var dices = $("select#dice-number").val();
    var players = $("select#player-computer").val();

    $("#start-menu").hide();
    $("#main-game").show();
    $("#one-dice").show();
  })

  $("#roll").click(function() {
    var pigRoll = new Dice();
    var currentRoll = pigRoll.rollDice();
    if (currentRoll === 1) {
      $("#current-side").empty().append(" Oh... Too bad!");
    } else {
      $("#current-side").empty().append(" " + currentRoll);
    }
  })
})
