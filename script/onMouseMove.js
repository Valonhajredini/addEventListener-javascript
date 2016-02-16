var canvas = document.getElementById('myCanvas');
canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt); // lock on ---> main.js
    document.getElementById("onmousemove").innerHTML = 'MouseMove position: X:' + mousePos.x + ', Y:' + mousePos.y;
}, false);
