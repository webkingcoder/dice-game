function roll(){    
var randomnum1 = Math.floor(Math.random()*6+1);
var randomdice1 ="dice"+randomnum1+".png";
var imgsrc =  document.querySelector(".img1");
imgsrc.setAttribute("src",randomdice1);

var randomnum2 = Math.floor(Math.random()*6+1);
var randomdice2 ="dice"+randomnum2+".png";
var imgsrc1 =  document.querySelector(".img2");
imgsrc1.setAttribute("src",randomdice2);

if(randomnum1 > randomnum2){
    document.querySelector("h1").textContent = "player 1 win !!";
}else if(randomnum1 < randomnum2) {
    document.querySelector("h1").textContent = "player 2 win !!";
}else{
    document.querySelector("h1").textContent = "Its an draw ??";
}
}