var checker = function(comboGroup) {
       this.space1};

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
    this.open = true;
    this.markedBy = false;
  },
  create: function(x, y) {
    var newSpace = Object.create(Space);
    newSpace.initialize(x, y);
    return newSpace;
  },
  markBy: function(player) {
    this.markedBy = player;
    this.open = false;
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
  },
  checkWin: function(playerSymbol) {
    var winningCombos = [["space1","space2","space3"], 
                    ["space4","space5","space6"], 
                    ["space7","space8","space9"], 
                    ["space1","space4","space7"], 
                    ["space2","space5","space8"],
                    ["space3","space6","space9"],
                    ["space1","space5","space9"],
                    ["space3","space5","space7"]];

    var currentObject = this;
    
    var checker = function(playerSymbol, comboGroup) {
      return playerSymbol === currentObject[comboGroup[0]].markedBy.symbol && playerSymbol === currentObject[comboGroup[1]].markedBy.symbol && playerSymbol === currentObject[comboGroup[2]].markedBy.symbol
    };

    return winningCombos.some(function(comboGroup) {
      return checker(playerSymbol, comboGroup)
    });
  }
};

$(document).ready(function(){
  var playerTurnX = true;
  var newBoard = Board.create();
  var playerX = Player.create("X");
  var playerO = Player.create("O");

  $(".grid").click(function(){
    var clickedBox = newBoard[$(this).attr("id")]
    if (playerTurnX && clickedBox.open){
      clickedBox.markBy(playerX);
      $(this).text(playerX.symbol);
      playerTurnX = !playerTurnX;
    } else if (clickedBox.open) {
      clickedBox.markBy(playerO);
      $(this).text(playerO.symbol);
      playerTurnX = true;
    }
    if (newBoard.checkWin("X")) {
      alert("X WINS");
    } else if (newBoard.checkWin("O")) {
      alert("O WINS");
    }
  });
});


