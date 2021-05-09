window.onload = () => {
    
    let fib = window.prompt(`Please enter a numeric value`);
    fib = parseInt(fib, 10);
    let output = document.querySelector(`#output`);

    if(!isNaN(fib) && fib>=0){
        var fibonacci = [];
        if(fib == 0){
            fibonacci[0] = 0;
        }
        if(fib == 1){
            fibonacci[0] = 1;
        }
        if(fib == 2){
            fibonacci[0] = 1;
            fibonacci[1] = 1;
        }
        if(fib>2){
            fibonacci[0] = 1;
            fibonacci[1] = 1;
            for(let i=2; i<fib; i++){
                fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
            }
        }
    }
    else{
        alert(`Please enter an integer value`);
        window.location.reload();
    }

    output.innerHTML = `You entered the value: <b>`+fib+`</b>, which results in the following Fibonacci Sequence. The last value in the sequence is the 
    value of F<sub>`+fib+`</sub>. F<sub>`+fib+`</sub> = `+fibonacci[fibonacci.length-1]+`.<br><br>`;
    for(let i=0; i<fibonacci.length; i++){
        if(i==fibonacci.length-1){
            output.innerHTML += `<b>`+fibonacci[i]+`</b>`;
        }
        else{
            output.innerHTML += fibonacci[i] + ` `;
        }
    }
}
