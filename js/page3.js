window.onload = () => {
    
    let buttonPageThree = document.querySelector(`#thirdPageButton`);
    let translated = false;

    let transforms = () => {
        let box = document.querySelector(`#transform`);
        if(!translated) {
            box.style.transition = `transform 2s`;
            box.style.transform = `translate(` + 50 + `px,` + 100 + `px)`;
            translated = true;
        }
        else {
            box.style.transition = `transform 2s`;
            box.style.transform = `translate(` + 0 + `px,` + 0 + `px)`;
            translated = false;
        }
    };

    buttonPageThree.addEventListener(`click`, transforms);

}
