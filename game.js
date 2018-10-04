
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


          



