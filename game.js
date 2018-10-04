
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

        
          // Creating train
        var train = function () {
        this.segments = [
        new Blocks(7, 5),
        new Blocks(6, 5),
        new Blocks(5, 5)
        ];
        this.direction = "right";
        this.nextDirection = "right";
      };