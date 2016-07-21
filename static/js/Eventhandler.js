$(window).on('load', function() {

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
});