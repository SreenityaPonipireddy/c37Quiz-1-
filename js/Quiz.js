class Quiz{
constructor(){

}
getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
}

update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
      if(gameState===0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
              contestantCount = contestantCountRef.val();
              contestant.getCount();
          }
          question = new Question();
          question.display();
      }
  }
  play(){
    question.hide();
    button.hide();
    title.hide();
    background("yellow");
    textSize(30);
    text("Results!", 120, 100)
    contestant.getContestantInfo();

    if(allContestants !== undefined){
        text("Note: The contestant with a green title got the correct answer!");
        var displayAnswers = 230;
        for(var plr in allContestants){
            var correctAns = "2";
            if (correctAns===allContestants[plr].answer)
            fill("green");
            else{
                fill("red");

            }
            displayAnswers+=20;
            text(allContestants[plr].name+":"+allContestants[plr].answer, 250, displayAnswers);
        }
    }
  }
}