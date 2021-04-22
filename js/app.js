window.onload = () => {
    alert(`Hello!`);

    let buttonOne = document.querySelector(`#button1`);
    let buttonPageThree = document.querySelector(`#thirdPageButton`);

    let changeColor = () => {
        let background = document.querySelector(`body`);
        background.style.backgroundColor = `black`;
        background.style.color = `white`;
    }

    let transforms = () => {
        let box = document.querySelector(`#transform`);
        box.style.transform = `translate(` + 50 + `px,` + 100 + `px)`;
    }

    buttonPageThree.addEventListener(`click`, transforms);
    buttonOne.addEventListener(`click`, changeColor);
}
