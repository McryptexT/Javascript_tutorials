let display=document.getElementById("screen");
function allclear()
{
    display.value = "";
}

function clear()
{
    display.value = display.value.slice(0, -1);
}

function show(n)
{
    display.value += n;
}

function calc()
{
    display.value = eval(display.value);
}

let percent=document.getElementById("a")
function pp(){
    display.value = display.value/100
}