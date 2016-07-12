$(window).on('load', function() {
    const DURATION = 10000,
          STEPS = 157,
          STEP_LENGTH = 0.01;

    var canvas = document.getElementById('canvas-timer'),
        ctx = canvas.getContext('2d'),
        timer1 = setInterval(drawAccentCircle, (DURATION / STEPS)),
        timer2 = setInterval(drawNumber, 1000),
        step = 0,
        second = DURATION / 1000;

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
            window.clearInterval(timer1);
        }
    }

    function drawText() {
        ctx.fillStyle = '#FFF';
        ctx.textAlign="center";
        ctx.font = '20px sans-serif';
        ctx.fillText('REFRESH', 160, 125);
        ctx.font = '80px sans-serif';
        ctx.fillText(second, 160, 190);
        ctx.font = '20px sans-serif';
        ctx.fillText('SECONDS', 160, 210);
    }

    function drawNumber() {
        ctx.fillStyle = '#212121';
        ctx.fillRect(100, 128, canvas.width, 65);
        ctx.textAlign="center";
        ctx.fillStyle = '#FFF';
        ctx.font = '80px sans-serif';
        ctx.fillText(second-1, 160, 190);
        second--;
        if (second == 0) {
            window.clearInterval(timer2);
        }
    }

    drawWhiteCircle();
    drawText();
});