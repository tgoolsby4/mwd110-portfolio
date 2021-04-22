window.onload = () => {
    
    let buttonPageThree = document.querySelector(`#thirdPageButton`);

    let transforms = () => {
        let box = document.querySelector(`#transform`);
        box.style.transform = `translate(` + 50 + `px,` + 100 + `px)`;
    }

    buttonPageThree.addEventListener(`click`, transforms);

}
