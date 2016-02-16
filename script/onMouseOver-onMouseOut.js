// On mouse Over
canvas.addEventListener('mouseover', function(evt) {
    document.getElementById("mouseover").innerHTML = "Canvas: Over";
    document.getElementById("myCanvas").style.cursor = "crosshair";
}, false);


// On mouse Out
canvas.addEventListener('mouseout', function(evt) {
    document.getElementById("mouseover").innerHTML = "Canvas: Out";
    document.getElementById("myCanvas").style.cursor = "default";
}, false);
