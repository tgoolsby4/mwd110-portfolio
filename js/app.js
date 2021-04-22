window.onload = () => {
    alert(`Hello!`);

    let buttonOne = document.querySelector(`#button1`);

    let changeColor = () => {
        let background = document.querySelector(`body`);
        background.style.backgroundColor = `black`;
        background.style.color = `white`;
    }

    buttonOne.addEventListener(`click`, changeColor);
}
