function playVideo() {

    const video = document.querySelector('.player-video');
    const togglePlayBtn = document.querySelector('.toggle-play-btn');
    const progressBar = document.querySelector('.progress-bar');
    const progressDot = document.querySelector('.progress-dot');
    const videoTime = document.querySelector('.video-time');

    video.autoplay = true;
    video.muted = true;

    //play or pause the video
    function togglePlay() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }

    //update play/pause button
    function updateButton() {

        if (this.paused) {
            togglePlayBtn.classList.remove('play-btn');
            togglePlayBtn.classList.add('pause-btn');
        } else {
            togglePlayBtn.classList.add('play-btn');
            togglePlayBtn.classList.remove('pause-btn');
        }
    }

    //set progressDot in actual time position
    function handleProgress() {
        const percent = (video.currentTime/video.duration) * 100;
        progressDot.style.left = `${percent}%`;
    }

    //set the currentTime at the position where clicked
    function catchTime(e) {
        const catchedTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
        //e.offsetX - position where clicked, offsetWidth - whole progressBar width, duration - whole video duration
        video.currentTime = catchedTime;
    }

    //update time text in html
    function updateTime() {

        let time = video.currentTime;
        let secs = Math.floor(time).toFixed(0);
        let miliSecs = ((time - Math.floor(time))*100).toFixed(0);
        let ms = Number(miliSecs)<10 ? '0'+ miliSecs : miliSecs;
        let formattedTime;

        if (time<10) {
            formattedTime = "0" + secs + ":" + ms;

        } else {
            formattedTime = secs + ":" + ms;
        }

        videoTime.innerHTML = formattedTime;

        while (video.currentTime===video.duration) {
            video.play();
        }
    }

    //add listeners
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);
    video.addEventListener('timeupdate', updateTime);
    togglePlayBtn.addEventListener('click', togglePlay);
    progressBar.addEventListener('click', catchTime);
    video.addEventListener('DOMContentLoaded', video.play);

} playVideo();









