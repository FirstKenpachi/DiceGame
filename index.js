document.getElementById("refresh").onclick=function(){
    let number1=Math.floor((Math.random(6)*6)+1);
    let number2=Math.floor((Math.random(6)*6)+1);
    console.log(number1);
    console.log(number2);
    

    let dice1=document.getElementsByName("myimg");
    // CODE FOR DICE 1
    if (number1==1){
        document.getElementById("myimg1").setAttribute("src","images/dice1.png");
    }
    else if(number1==2){
        document.getElementById("myimg1").setAttribute("src","images/dice2.png");
        

    }
    else if(number1==3 ){
        document.getElementById("myimg1").setAttribute("src","images/dice3.png");
  

    }
    else if(number1==4 ){
        document.getElementById("myimg1").setAttribute("src","images/dice4.png");
   

    }
    else if(number1==5){
        document.getElementById("myimg1").setAttribute("src","images/dice5.png");
        

    }
    else if(number1==6 ){
        document.getElementById("myimg1").setAttribute("src","images/dice6.png");

    }

    // CODE FOR DICE2
    if (number2==1){
        document.getElementById("myimg2").setAttribute("src","images/dice1.png");
    }
    else if(number2==2){
        document.getElementById("myimg2").setAttribute("src","images/dice2.png");
        

    }
    else if(number2==3 ){
        document.getElementById("myimg2").setAttribute("src","images/dice3.png");
  

    }
    else if(number2==4 ){
        document.getElementById("myimg2").setAttribute("src","images/dice4.png");
   

    }
    else if(number2==5){
        document.getElementById("myimg2").src="images/dice5.png";

    }
    else if(number2==6 ){
        document.getElementById("myimg2").setAttribute("src","images/dice6.png");

    }

    // CODE FOR H1
    if(number1==number2){
        document.getElementById("header").innerHTML="DRAW! 😒"
    }
    else if(number1>number2){
        document.getElementById("header").innerHTML="PLAYER 1 WON 😍😍"
    }
    else{
        document.getElementById("header").innerHTML="PLAYER 2 WON  😎😎"
    }

}