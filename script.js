const display = document.getElementById("display")

function clrDisplay(){
    display.value = "";
}
function delOne(){
    display.value=display.value.toString().slice(0,-1);
}
function addDigit(input){
    display.value += input
}
function addOperator(input){
    display.value += input
}


function dispResult(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        setTimeout(() => {
            display.value = "";
        }, 3500)
    }
}