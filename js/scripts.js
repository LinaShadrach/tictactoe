var spaces = [];

function Game(players, board, turn, over, winner){
  this.players = players;
  this.board = board;
  this.playerTurn = turn;
  this.over = over;
  this.winner = "";
}

Game.prototype={
  constructor: Game,
  changeTurn: function(turn) {
    if(turn === this.players[0]) {
      this.playerTurn = this.players[1];
    }
    else if (turn === this.players[1]){
      this.playerTurn = this.players[0];
    }
  },

  gameOver: function(){
    for (var i = 0; i < 3; i++){
      var markString = "";
      var markString2 = "";
      for (var j=0; j <3; j++){
        markString = markString + this.board.spaces[i][j].markedBy;
        markString2 = markString2 + this.board.spaces[j][i].markedBy;
      }
      if (markString === "OOO"){
        this.winner = "player1";
        this.over = true;
      }
      if (markString === "XXX"){
        this.winner = "player2";
        this.over = true;
      }
      if (markString2 === "OOO"){
        this.winner = "player1";
        this.over = true;
      }
      if (markString2 === "XXX"){
        this.winner = "player2";
        this.over = true;
      }
    }
  }
}

function Board(spaces) {
  this.spaces = spaces;
}

function Space(marked, markedBy, coordinates) {
  this.marked = marked;
  this.markedBy = markedBy;
  this.coordinates = coordinates;
}
function Player(pName, mark) {
  this.pName = pName;
  this.mark = mark;
}



var newGame = function() {
  spaces = [];
  var gridString = ""
  for (var i = 0; i <3; i ++) {
    gridString = gridString + ("<div class = 'row'>");
    var row = [];
    for(var j = 0; j<3; j++){
      gridString = gridString + ("<div class = 'col-xs-4 btn' id = '") + i + ""+ j + ("'></div>");
      var space = new Space(false, "", [i, j])
      row.push(space);
    }
    spaces.push(row);
    gridString = gridString + ("</div>");
  }
  return gridString;
}




$(document).ready(function(){
  $("form #play").click(function(event){

    event.preventDefault();
    var gridString = newGame();
    $(".grid").append(gridString);
    var inputName1 = $("#pName1").val();
    var inputName2 = $("#pName2").val();
    var player1= new Player("inputName1", "O");
    var player2 = new Player("inputName2", "X");

    var board = new Board(spaces);

    var game = new Game([player1, player2], board, player1, false);

    $(".grid .btn").click(function(){
      var positionID = $(this).attr('id');
      var position = positionID.split("");
      if(game.board.spaces[position[0]][position[1]].marked === false){
        game.board.spaces[position[0]][position[1]].marked = true;
        var mark = game.playerTurn.mark;
        $(this).append(mark);
        game.board.spaces[position[0]][position[1]].markedBy = mark;
        game.changeTurn(game.playerTurn);
        game.gameOver();
        if (game.over) {
          $(".winner").text(game.winner);
          $(".grid").hide();
        }
      }
    });
    $(".start").hide();
  });
});
