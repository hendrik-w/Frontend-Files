$(window).on('load', function() {
    const DURATION = 10000,
          STEPS = 157,
          STEP_LENGTH = 0.01;

    var canvas = document.getElementById('canvas-timer'),
        ctx = canvas.getContext('2d'),
        timer = setInterval(drawAccentCircle, (DURATION / STEPS)),
        step = 0;

    function drawWhiteCircle() {
        ctx.strokeStyle="#FFF";
        ctx.lineWidth=3;
        ctx.beginPath();
        ctx.arc(canvas.width,canvas.height,240,1*Math.PI,1.5*Math.PI);
        ctx.stroke();
    }

    function drawAccentCircle() {
        ctx.strokeStyle="#FF5722";
        ctx.lineWidth=7;
        ctx.beginPath();
        ctx.arc(canvas.width,canvas.height,240,1*Math.PI + step ,1*Math.PI + step + STEP_LENGTH);
        ctx.stroke();
        step += 0.01;
        if (step >= (STEPS * STEP_LENGTH)) {
            window.clearInterval(timer);
        }
    }

    drawWhiteCircle();
});