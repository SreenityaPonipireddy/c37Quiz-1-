class Contestant {
    constructor(){
      //number property
      this.index=null;
      //distance property
      this.distance=0;
      //name property
      this.name=null;
      
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
       contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      //Using string concatenation, we are adding this.index to the player folder
      var contestantIndex = "contestants/contestant"+this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    //To get player's information, which us used to start the game
    //static function is called by the class name itself and doesn't need object to show output.
    //It is not attached to just ONE PLAYER but ALL OF THE PLAYERS--Just like a group
    static getContestantInfo(){
   
      var contestantInfoRef=database.ref('contestants');
      //arrow function will bind the function to original object(player1, player2...) which calls it 
     contestantInfoRef.on("value",(data)=>{
        allContestants=data.val();
      })
      
      
    }
  }