$(window).on('load', function() {
    var canvas = document.getElementById('canvas-timer'),
        ctx = canvas.getContext('2d');

    function drawWhiteCircle() {
        ctx.strokeStyle="#FFF";
        ctx.lineWidth=3;
        ctx.beginPath();
        ctx.arc(canvas.width,canvas.height,240,1*Math.PI,1.5*Math.PI);
        ctx.stroke();
    }

    var myVar = setInterval(myTimer, 35);
    var i = 0;
    var end = 1.57079632679;
    var duration = 60000;
    var steps = 1570.7963;

    function myTimer() {
        ctx.strokeStyle="#FF5722";
        ctx.lineWidth=7;
        ctx.beginPath();
        ctx.arc(canvas.width,canvas.height,240,1*Math.PI + i ,1*Math.PI + i + 0.001);
        ctx.stroke();
        i += 0.001;

        console.log(i);

        if (i >= end) {
            window.clearInterval(myVar);
            return;
        }
    }

    drawWhiteCircle();
});