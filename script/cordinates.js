function onMouseMove(event){
    cX = event.clientX - rect.left;
    cY = event.clientY -rect.top;
    document.getElementById("onmousemove").innerHTML =  "On MouseMove( Cord X: "+ cX + ", Cord Y: "+ cY+ ")";
    //alert("Moving");
}

function onMouseMove(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var mousePos = getMousePos(canvas, evt);
var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
document.getElementById("onmousemove").innerHTML = message;