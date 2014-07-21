describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
  describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("assigns the correct coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe("create", function() {
    it("creates a new Space object", function() {
      var testSpace = Space.create(Space);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("markBy", function() {
    it("lets a player mark the space they choose", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1,2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  describe("initialize", function(){
    it("creates 9 spaces when it is initialized", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.space1.xCoordinate.should.equal(0);
    });
  });
  describe("create", function() {
    it("creates a new Board object", function() {
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  });
  describe("checkWin", function() {
    it("checks to see if a player has won the game", function() {
      var x = Player.create("X");
      var o = Player.create("O");
      var testBoard = Board.create();
      testBoard.space1.markBy(x);
      testBoard.space2.markBy(x);
      testBoard.space3.markBy(x);
      testBoard.checkWin("X").should.equal(true);
    });
    it("returns false if the player has not yet won the game", function() {
      var x = Player.create("X");
      var o = Player.create("O");
      var testBoard2 = Board.create();
      testBoard2.space1.markBy(x);
      testBoard2.space2.markBy(o);
      testBoard2.space3.markBy(x);
      testBoard2.checkWin("X").should.equal(false);
    });
  });
});
