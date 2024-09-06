const form = document.querySelector('form');

form.addEventListener('submit', function(e){ //allows you to add event listeners on any HTML DOM object
    e.preventDefault() //cancels the event if it is cancelable
    const input = document.querySelector('input') //returns the first element that matches a CSS selector
    let results = document.querySelector('span') //returns the first element that matches a CSS selector
    let poundToKG; //used to declare variables 

    if((input.value <= 0) || (isNaN(input.value))){ //to specify a block of code to be executed, if a specified condition is true
        results.classList.add('error')
        results.innerHTML ="<p>Please enter a value number!</p>"
        setTimeout(function (){
            results.innerHTML=''
            results.classList.remove('error')
        }, 2000)
        input.value='' // to input some value
    }else{ //to specify a block of code to be executed, if the same condition is false
        poundToKG = Number(input.value) / 2.2; 
        results.classList.add('no-error')
        results.innerHTML = `${poundToKG.toFixed(2)}`;
        setTimeout(function (){
            results.innerHTML= ''
            input.value= ''
            results.classList.remove('no-error')
        }, 10000)

    }


});

