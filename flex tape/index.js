
'use strict';

      var jujubub = document.getElementById("board");


      board.addEventListener('click', function(e)  {
          e.target.innerHTML = "1";

          var squares = document.querySelectorAll('.square');

console.log(squares);
          alert(squares[0].innerHTML);
});
