window.onload = () => {
    alert(`Hello!`);

    let buttonOne = document.querySelector(`#button1`);
    let inverted = false;

    let changeColor = () => {
        if(!inverted) {
            let background = document.querySelector(`body`);
            background.style.backgroundColor = `black`;
            background.style.color = `white`;
            inverted = true;
        }
        else {
            let background = document.querySelector(`body`);
            background.style.backgroundColor = `hsl(200, 80%, 75%)`;
            background.style.color = `black`;
            inverted = false;
        }
    }

    buttonOne.addEventListener(`click`, changeColor);
}
