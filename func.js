var display = document.getElementById("mainWindow").innerHTML; 

display.innerText = 0;

var buttonOne = 1;
if(document.getElementById('one').clicked == true)
{
    document.getElementById("mainWindow").innerHTML = Math.floor(Math.random() * (max - min)) + min;
}




document.getElementById("one").onclick = function() {
        var numberOne = document.getElementById("one");
        var numberOne= content.innerText;
        content.innerText++;
    }
