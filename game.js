
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
          context.fillText("Wynik: " + wynik, rozmiarBloku, rozmiarBloku);
        };
          



