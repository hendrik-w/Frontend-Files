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

    drawWhiteCircle();
});