var i = 0;
var text = "ASSISTA BUSINESS SOLUTION";
const splitText = text.split("");

function typing(){
    
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}


typing();








