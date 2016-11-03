var spaces = [];
function Game(players, board, turn, over){
  this.players = players;
  this.board = board;
  this.playerTurn = turn;
  this.over = over;
  this.winner = '';
  this.computerChoice;
  this.computer
  this.round = 0;
}

Game.prototype={
  constructor: Game,
  changeTurn: function() {
    if(this.playerTurn === this.players[0]) {
      this.board.currentSpace.markedBy = this.players[0].mark;
      this.playerTurn = this.players[1];
    }
    else if (this.playerTurn === this.players[1]){
      this.board.currentSpace.markedBy = this.players[1].mark;
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
        this.winner = this.players[0];
        this.over = true;
      }
      if (markString === "XXX"){
        this.winner = this.players[1];
        this.over = true;
      }
      if (markString2 === "OOO"){
        this.winner = this.players[0];
        this.over = true;
      }
      if (markString2 === "XXX"){
        this.winner = this.players[1];
        this.over = true;
      }
    }
    if ((this.board.spaces[0][0].markedBy === this.board.spaces[1][1].markedBy &&  this.board.spaces[1][1].markedBy === this.board.spaces[2][2].markedBy) || (this.board.spaces[0][2].markedBy === this.board.spaces[1][1].markedBy && this.board.spaces[1][1].markedBy === this.board.spaces[2][0].markedBy)) {
      if (this.board.spaces[1][1].markedBy === "O") {
        this.winner = this.players[0];
        this.over = true;
        console.log(this.winner);
      }
      else if (this.board.spaces[1][1].markedBy === "X") {
        this.winner = this.players[1];
        this.over = true;
      }
    }
  },
  computerMove: function() {
      for (var i = 0; i < 3; i++){
        var markString = "";
        var markString2 = "";
        for (var j=0; j <3; j++){
          markString = markString + this.board.spaces[i][j].markedBy;
          markString2 = markString2 + this.board.spaces[j][i].markedBy;
        }
        if (markString === "XX"){
          for (var index= 0; index<3; index ++) {
            if (this.board.spaces[i][index].marked === false) {
              this.board.spaces[i][index].marked = true;
              this.board.spaces[index][i].markedBy = this.playerTurn.mark;
              this.computerChoice = i +''+ index;
            }
          }
          this.changeTurn();
        }
        if (markString2 === "XX"){
          for (var index= 0; index<3; index ++) {
            if (this.board.spaces[index][i].marked === false) {
              this.board.spaces[index][i].marked = true;
              this.board.spaces[index][i].markedBy = this.playerTurn.mark;
              this.computerChoice = index +''+ i;
            }
          }
          this.changeTurn();;
        }
      }
      if(this.playerTurn.pName === "Computer"){
        for (var i = 0; i < 3; i++){
          var markString = "";
          var markString2 = "";
          for (var j=0; j <3; j++){
            markString = markString + this.board.spaces[i][j].markedBy;
            markString2 = markString2 + this.board.spaces[j][i].markedBy;
          }
          if (markString === "OO"){
            for (var index= 0; index<3; index ++) {
              if (this.board.spaces[i][index].marked === false) {
                this.board.spaces[i][index].marked = true;
                this.board.spaces[index][i].markedBy = this.playerTurn.mark;
                this.computerChoice = i +''+ index;
              }
            }
            this.changeTurn();
          }
          if (markString2 === "OO"){
            for (var index= 0; index<3; index ++) {
              if (this.board.spaces[index][i].marked === false) {
                this.board.spaces[index][i].marked = true;
                this.board.spaces[index][i].markedBy = this.playerTurn.mark;
                this.computerChoice = index +''+ i;
              }
            }
            this.changeTurn();
          }
        }
      }
      if(this.playerTurn.pName === "Computer") {
        var x = Math.floor(Math.random()*3);
        var y = Math.floor(Math.random()*3)
        this.computerChoice =  x + '' + y;
        this.board.spaces[x][y].marked = true;
        this.changeTurn();
      }
    console.log(this.computerChoice);
  }
};

function Board(spaces, currentSpace) {
  this.spaces = spaces;
  this.currentSpace = currentSpace;
};
Board.prototype = {
  constructor: Board,
  getSpace: function(coordinates) {
    return this.spaces[coordinates[0]][coordinates[1]];
  }
};

function Space(marked, markedBy, Xcoordinate, Ycoordinate) {
  this.marked = marked;
  this.markedBy = markedBy;
  this.Xcoordinate = Xcoordinate;
  this.Ycoordinate = Ycoordinate
};

function Player(pName, mark) {
  this.pName = pName;
  this.mark = mark;
};



var newGame = function() {
  spaces = [];
  var gridString = ""
  for (var i = 0; i <3; i ++) {
    gridString = gridString + ("<div class = 'row'>");
    var row = [];
    for(var j = 0; j<3; j++){
      gridString = gridString + ("<div class = 'col-xs-4 btn' id = '") + i + ""+ j + ("'></div>");
      var space  = new Space(false, "", i , j);
      row.push(space);
    }
    spaces.push(row);
    gridString = gridString + ("</div>");
  }
  return gridString;
}




$(document).ready(function(){

  var beginGame = function(player1, player2) {
    console.log(player1, player2)
    var gridString = newGame();
    $(".grid").append(gridString);
    var one = new Player(player1, "O");
    var two = new Player(player2, "X");
    var board = new Board(spaces);
    var game = new Game([one, two], board, one, false);

    $(".grid .btn").click(function() {
      var positionID = $(this).attr('id');
      var position = positionID.split("");
      // debugger;
      game.board.currentSpace = game.board.getSpace(position);
      if(game.board.currentSpace.marked === false){
        game.board.currentSpace.marked = true;
        $(this).append(game.playerTurn.mark);
        console.log(game.playerTurn.pName);

        game.changeTurn();
        game.gameOver();
          // $(".grid").hide();
        if (game.over=== true) {
          console.log(game.winner);
          $(".winner").text(game.winner.pName + " wins!");
        } else if (game.playerTurn.pName === "Computer" && game.over === false) {
          game.computerMove();
          var choice = "#" + game.computerChoice;
          $(choice).append(game.players[1].mark);
          game.gameOver();
          if (game.over===true) {
            console.log(game.winner.pName);
            $(".winner").text(game.winner.pName + " wins!");
            // $(".grid").hide();
          }
        }

      }
    });
  };

  $("#start").submit(function(event){
    event.preventDefault();

    var inputOption = $("#option").val();
    console.log(inputOption);
    if (inputOption === "one") {
      beginGame("You", "Computer");
    }
    if (inputOption === "two"){
      $("#names").show();
      $('#start').hide();
    }
    $("#start").hide();
  });

  $("#names").submit(function(event){
    event.preventDefault();
    var input1 = $("input#pName1").val();
    var input2 = $("input#pName2").val();
    beginGame(input1, input2);
    $('#names').hide();
  });
});
