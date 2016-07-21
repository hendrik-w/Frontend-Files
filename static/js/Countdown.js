$(window).on('load', function() {
    const DURATION = 60000,
          STEPS = 157,
          STEP_LENGTH = 0.01;

    var canvas = document.getElementById('canvas-timer'),
        canvas2 = document.getElementById('canvas-cloud'),
        ctx = canvas.getContext('2d'),
        ctx2 = canvas2.getContext('2d'),
        timer1 = setInterval(drawAccentCircle, (DURATION / STEPS)),
        timer2 = setInterval(drawNumber, 1000),
        step = 0,
        second = DURATION / 1000;

    ctx2.canvas.width  = window.innerWidth *0.7;
    ctx2.canvas.height = window.innerHeight *0.7;

    function doSampleCanvas() {
        /* draw something */
        ctx2.fillStyle = '#FF5722';
        ctx2.font = '20px sans-serif';
        ctx2.fillText('Sample Tagcloud', 10, canvas2.height / 2 - 15);
        ctx2.font = '16px sans-serif';
        ctx2.fillText('Click link below to save this as image', 15, canvas2.height / 2 + 35);
    }

    function reloadTimer() {
        delAccentCircle();
        window.clearInterval(timer1);
        window.clearInterval(timer2);

        // display new Tagcloud

        timer1 = setInterval(drawAccentCircle, (DURATION / STEPS));
        timer2 = setInterval(drawNumber, 1000);
        step = 0;
        second = DURATION / 1000;
        drawText();
    }

    function drawWhiteCircle() {
        ctx.strokeStyle="#FFF";
        ctx.lineWidth=3;
        ctx.beginPath();
        ctx.arc(canvas.width,canvas.height,240,1*Math.PI,1.5*Math.PI);
        ctx.stroke();
    }

    function delAccentCircle() {
        ctx.strokeStyle="#212121";
        ctx.lineWidth=10;
        ctx.beginPath();
        ctx.arc(canvas.width,canvas.height,240,1*Math.PI,1.5*Math.PI);
        ctx.stroke();
        drawWhiteCircle();
    }

    function drawAccentCircle() {
        if (!paused) {
            ctx.strokeStyle="#FF5722";
            ctx.lineWidth=7;
            ctx.beginPath();
            ctx.arc(canvas.width,canvas.height,240,1*Math.PI + step ,1*Math.PI + step + STEP_LENGTH);
            ctx.stroke();
            step += 0.01;
        }
        if (step >= (STEPS * STEP_LENGTH)) {           
            reloadTimer();
        }
    }

    function drawText() {
        ctx.fillStyle = '#212121';
        ctx.fillRect(100, 128, canvas.width, 65);
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
        if (!paused) {
            ctx.fillStyle = '#212121';
            ctx.fillRect(100, 128, canvas.width, 65);
            ctx.textAlign="center";
            ctx.fillStyle = '#FFF';
            ctx.font = '80px sans-serif';
            ctx.fillText(second-1, 160, 190);
            second--;
        }

        if (second < 0) {
            reloadTimer();
            paused = true;
        }
    }

    drawWhiteCircle();
    drawText();
});