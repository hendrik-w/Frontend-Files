$(window).on('load', function() {
    var canvas = document.getElementById('canvas-cloud'),
        ctx = canvas.getContext('2d');

    function doSampleCanvas() {
        /* draw something */
        ctx.fillStyle = '#FF5722';
        ctx.font = '20px sans-serif';
        ctx.fillText('Sample Tagcloud', 10, canvas.height / 2 - 15);
        ctx.font = '16px sans-serif';
        ctx.fillText('Click link below to save this as image', 15, canvas.height / 2 + 35);
    }

    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }

    document.getElementById('download-link').addEventListener('click', function() {
        downloadCanvas(this, 'canvas-cloud', 'Tagcloud.png');
    }, false);

    document.getElementById('pause-link').addEventListener('click', function() {
        if (paused == true) {
            paused = false;
            document.getElementById('pause-button').style.backgroundImage='url("static/res/img/pause.png")'; 
        } else {
            paused = true;
            document.getElementById('pause-button').style.backgroundImage='url("static/res/img/play.png")'; 
        }
    }, false);

    document.getElementById('home-link').addEventListener('click', function() {
        window.location.href = "index.html";
    }, false);

    doSampleCanvas();
});