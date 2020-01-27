// Back End
function Dice() {
  this.number;
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
    var currentRoll = new Dice();
    if (currentRoll.rollDice() === 1) {
      $("#current-side").empty().append("Oh... Too bad!");
    }
    console.log(currentRoll.rollDice());
  })
})
