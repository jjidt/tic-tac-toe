var Player = {
  initialize: function(symbol) {
    this.symbol = symbol;
  },
  create: function(symbol) {
    var newPlayer = Object.create(Player);
    newPlayer.initialize(symbol);
    return newPlayer;
  }
};

var Space = {
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function(x, y) {
    var newSpace = Object.create(Space);
    newSpace.initialize(x, y);
    return newSpace;
  },
  markBy: function(player) {
    this.markedBy = player;
  }
};

var Board = {
  initialize: function() {
    this.space1 = Space.create(0,0);
    this.space2 = Space.create(0,1);
    this.space3 = Space.create(0,2);
    this.space4 = Space.create(1,0);
    this.space5 = Space.create(1,1);
    this.space6 = Space.create(1,2);
    this.space7 = Space.create(2,0);
    this.space8 = Space.create(2,1);
    this.space9 = Space.create(2,2);
  },
  create: function() {
    var newBoard = Object.create(Board);
    newBoard.initialize();
    return newBoard;
  }
};

$(document).ready(function(){
  var playerTurnX = true;
  var newBoard = Board.create();
  var playerX = Player.create("X");
  var playerO = Player.create("O");

  $(".grid").click(function(){
    if (playerTurnX){
      var clickedBox = $(this).attr("id");
      console.log(newBoard[clickedBox].yCoordinate);
      newBoard[clickedBox].markBy(playerX);
      $(this).text(playerX.symbol);
      playerTurnX =  !playerTurnX;
    } else {
      var clickedBox = $(this).attr("id");
      console.log(newBoard[clickedBox].yCoordinate);
      newBoard[clickedBox].markBy(player0);
      $(this).text(player0.symbol);
      playerTurnX = true;
    }
  });
});


