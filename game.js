
        var board = document.querySelector("#board");
        var context = board.getContext("2d");
        var width = board.width;
        var height = board.height;

        var boxSize = 10;
        var boxWidth = width / boxSize;
        var boxHeigth = height / boxSize;

        var score = 0;

        var drawBorder = function () {
            context.fillStyle = "gray";
            context.fillRect(0, 0, width, boxSize);
            context.fillRect(0, height - boxSize, width, boxSize);
            context.fillRect(0, 0, boxSize, width);
            context.fillRect(width - boxSize, 0, boxSize, height);
        };

        var drawScore = function () {
          context.font = "24px Comic Sans MS";
          context.fillStyle = "red";
          context.textAlign = "left";
          context.textBaseline = "top";
          context.fillText("SCORE: " + score, boxSize, boxSize);
        };

        var gameOver = function () {
          clearInterval(timeId);
          context.font = "60px Comic Sans MS";
          context.fillStyle = "red";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("Game Over", width / 2, height / 2);
        };

        var circle = function (x, y, radius, fillCircle) {
          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2, false);
          if (fillCircle) {
            context.fill();
          } else {
            context.stroke();
          }
        };

        var Block = function (colum, row) {
          this.colum = colum;
          this.row = row;
        };

        Block.prototype.drawSquare = function (color) {
          var x = this.colum * boxSize;
          var y = this.row * boxSize;
          context.fillStyle = color;
          context.fillRect(x, y, boxSize, boxSize);
        };

        Block.prototype.drawCircle = function (color) {
          var middleX = this.colum * boxSize + boxSize / 2;
          var middleY = this.row * boxSize + boxSize / 2;
          context.fillStyle = color;
          circle(middleX, middleY, boxSize / 2, true);
        };

        Block.prototype.compare = function (otherBlock) {
          return this.colum === otherBlock.colum && this.row === otherBlock.row;
        };

        
          // Creating Train
        var Train = function () {
        this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
        ];

        this.direction = "right";
        this.nextDirection = "right";
      };


      Train.prototype.draw = function () {
        for (var i = 0; i < this.segments.length; i++) {
          this.segments[i].drawSquare ("Red");
        }
      };

       
       
      Train.prototype.move = function () {
        var front = this.segments[0];
        var newFront;
       
        this.direction = this.nextDirection;
       

    if (this.direction === "right") {
      newFront = new Block(front.colum + 1, front.row);
    } else if (this.direction === "down") {
      newFront = new Block(front.colum, front.row + 1);
    } else if (this.direction === "left") {
      newFront = new Block(front.colum - 1, front.row);
    } else if (this.direction === "up") {
      newFront = new Block(front.colum, front.row - 1);
    }
    if (this.crash(newFront)) {
      gameOver();
      return;
    }

    this.segments.unshift(newFront);
   
    if (newFront.compare(wagon.pozycja)) {
      wynik ++;
      wagon.bring();
    } else {
      this.segments.pop();
    }
  };


  Train.prototype.crash = function (Front) {
    var leftCrash = (Front.colum === 0);
    var topCrash = (Front.row === 0);
    var rightCrash = (Front.colum === boxWidth - 1);
    var downCrash = (Front.row === boxHeigth - 1);
   
    var wallCrash = leftCrash || topCrash ||
  rightCrash || downCrash;
   
    var lastWagonCrash = false;
   
    for (var i = 0; i < this.segments.length; i++) {
      if (Front.compare(this.segments[i])) {
        lastWagonCrash = true;
      }
    }
   
    return wallCrash || lastWagonCrash;
  };


  Train.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
      return;
    } else if (this.direction === "right" && newDirection === "left") {
      return;
    } else if (this.direction === "down" && newDirection === "up") {
      return;
    } else if (this.direction === "left" && newDirection === "right") {
      return;
    }
   
    this.nextDirection = newDirection;
  };