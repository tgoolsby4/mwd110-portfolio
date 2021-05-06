window.onload = () => {

    let videos = [];
    videos[0] = document.querySelector(`#v1`);
    videos[1] = document.querySelector(`#v2`);
    videos[2] = document.querySelector(`#v3`);
    videos[3] = document.querySelector(`#v4`);
    videos[4] = document.querySelector(`#v5`);
    videos[5] = document.querySelector(`#v6`);

    setTimeout(function(){
        videos[0].style.visibility = `visible`;
        setTimeout(function(){
            videos[1].style.visibility = `visible`;
            setTimeout(function(){
                videos[2].style.visibility = `visible`;
                setTimeout(function(){
                    videos[3].style.visibility = `visible`;
                    setTimeout(function(){
                        videos[4].style.visibility = `visible`;
                        setTimeout(function() {
                            videos[5].style.visibility = `visible`;
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
}
