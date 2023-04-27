document.querySelector("button").addEventListener("click",function(){
var audio=new Audio("crash.mp3");
audio.play();
var randomnumber1 = Math.floor(Math.random()*6+1);
var randomnumber2 = Math.floor(Math.random()*6+1);
var randomdiceimage1 = "dice"+randomnumber1+".png";
var randomdiceimage2 = "dice"+randomnumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage1);
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!⚖️";
}
});