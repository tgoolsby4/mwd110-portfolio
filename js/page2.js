window.onload = () => {

    let buttonOne = document.querySelector(`#button1`);
    let inverted = false;

    let changeColor = () => {
        if(!inverted) {
            let background = document.querySelector(`.pageTwo`);
            background.style.backgroundColor = `hsl(0, 0%, 25%)`;
            inverted = true;
        }
        else {
            let background = document.querySelector(`.pageTwo`);
            background.style.backgroundColor = `hsl(0, 100%, 100%)`;
            inverted = false;
        }
    }

    buttonOne.addEventListener(`click`, changeColor);
}
