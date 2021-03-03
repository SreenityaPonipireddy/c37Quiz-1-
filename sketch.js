var canva;
var gameState=0;
var database, quiz, question, contestant;
var allContestants;
var contestantCount=0;
    function setup(){
      database=firebase.database();
      canvas = createCanvas(850,400);
      quiz = new Quiz();
      quiz.getState();
      quiz.start();
    }


  function draw(){
    background("pink");
    if (contestantCount===4){
      //This is equal to gameState===PLAY
      quiz.update(1);
    }
    if(gameState===1){
      //this clears out the screen except output
      clear();
      quiz.play();
    }
      
    }
  

