window.onload = () => {

    let videos = document.querySelectorAll(`.video`);
    
    let appear = (x) => {
        x.style.visibility = `visible`;
    };

    for(i=0; i<videos.length; i++){
        let delay = 1000;
        setTimeout(appear(videos[i]), delay);
        delay += 1000;
    }
}
