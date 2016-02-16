canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt); // lock on ---> main.js
    document.getElementById("onmousedown").innerHTML = 'MouseClick position: X:' + mousePos.x + ', Y:' + mousePos.y;
}, false);


