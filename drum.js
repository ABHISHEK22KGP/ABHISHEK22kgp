                                         // INPUT FROM CLICK
for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var a=this.innerHTML;
    makeSound(a);
    buttonAnimation(a);
});
}
                                         // BY KEYBOARD PRESS
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
                                         // function for Audio
function makeSound(a){
if(a==="w"){
    var audio=new Audio("crash.mp3");
    audio.play();
}
if(a==="a"){
    var audio=new Audio("kick-bass.mp3");
    audio.play();
}
if(a==="s"){
    var audio=new Audio("snare.mp3");
    audio.play();
}
if(a==="d"){
    var audio=new Audio("tom-1.mp3");
    audio.play();
}
if(a==="j"){
    var audio=new Audio("tom-2.mp3");
    audio.play();
}
if(a==="k"){
    var audio=new Audio("tom-3.mp3");
    audio.play();
}
if(a==="l"){
    var audio=new Audio("tom-4.mp3");
    audio.play();
}
}

function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);  // we have a class
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100) 
}