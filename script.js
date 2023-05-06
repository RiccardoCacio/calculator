window.onload = function () {

    const number = document.querySelectorAll('.number');
    const ac = document.getElementById('ac');
    const del = document.getElementById('del');
    const display = document.getElementById('display');
    const percentual = document.getElementById('percentual');
    const egual = document.getElementById('egual');

    // add number to display
    number.forEach((number)=>{
        number.addEventListener('click',()=>{
            display.value += number.value;
        })
    })

    //clear display
    ac.addEventListener('click',()=>{
        display.value = ''
    })
    
    //delete the last number
    del.addEventListener('click',()=>{
        display.value = display.value.slice(0, -1);
    })
//percentual
    percentual.addEventListener('click',()=>{
        display.value= display.value / 100
    })

    // operation 
    egual.addEventListener('click',()=>{
display.value = eval(display.value);
    })










}