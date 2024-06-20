var ran=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+ran+".png";
var f="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",f);