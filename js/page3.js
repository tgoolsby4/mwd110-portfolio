window.onload = () => {
    
    let buttonPageThree = document.querySelector(`#thirdPageButton`);

    let transforms = () => {
        let box = document.querySelector(`#transform`);
        let tiny = document.querySelector(`#tiny`);
        let left = Math.floor(Math.random()*(1335-10+1)+10);
        let top = Math.floor(Math.random()*(400-10+1)+10);
        tiny.style.left = left+`px`;
        tiny.style.top = top+`px`;
        box.style.transition = `transform 2s`;
        box.style.transform = `translate(` + (left-100) + `px,` + top + `px)`;
    };

    buttonPageThree.addEventListener(`click`, transforms);

}
