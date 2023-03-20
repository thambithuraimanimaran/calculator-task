function clicking(e){
    // console.log(e.innerText);
    var inputTag= document.querySelector(".input input")
    
    var arr = ['*','/','+','-','%'];
    //  '12-'
    if(!(arr.includes(inputTag.value.slice(-1))&&arr.includes(e.innerText))){
        inputTag.value += e.innerText
    }
}

var equaltag = document.querySelector(".equal");
equaltag.addEventListener("click",solution);
function solution(){
    var inputTag= document.querySelector(".input input")
    var result = inputTag.value
    var output = eval(result);
    // console.log(output);
    inputTag.value = output;
}

var cleartag = document.querySelector(".clear");
cleartag.addEventListener("click",clear);
function clear(){
    document.querySelector(".input input").value="";
}

var backspace = document.querySelector(".backspace");
backspace.addEventListener("click",back);
function back(){
    var inputTag =document.querySelector(".input input");
    var result = inputTag.value;
    inputTag.value =result.slice(0,-1)

}

window.addEventListener("keypress",keyboard);
function keyboard(ele){
    var inputTag = document.querySelector(".input input");
var end = ele.code
 console.log(ele)
 var arr =["Minus","Equal","Slash"]
   if(end.includes("Digit") || end.includes("Equal")||end.includes("Minus")||end.includes("Slash")  ){
    inputTag.value += ele.key;
    console.log(ele)
   }
   else if(end.includes("Enter")){
    document.querySelector(".input input");
    var finalout = inputTag.value;
    var finalresult = eval(finalout);
    inputTag.value = finalresult;
   }
    
}
