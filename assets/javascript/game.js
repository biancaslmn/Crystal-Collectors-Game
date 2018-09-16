$(document).ready(function(){
    //generate random number 
    var Random=Math.floor(Math.random()*101+19)

   $('.randomNumber').text(Random);

   //setting up each crystal to equal a number between 1 - 12
   var crystalOne = Math.floor(Math.random() * 11) + 1; 
   console.log("Crystal 1: " + crystalOne); 
   $("#one").html("<img src=" + "assets/image/aquacrystal.png" + " value=" + crystalOne + ">"); 

   var crystalTwo = Math.floor(Math.random() * 11) + 1; 
   console.log("Crystal 2: " + crystalTwo); 
   $("#two").html("<img src=" + "assets/image/greencrystal.png" + " value=" + crystalTwo + ">"); 

   var crystalThree = Math.floor(Math.random() * 11) + 1; 
   console.log("Crystal 3: " + crystalThree); 
   $("#three").html("<img src=" + "assets/image/pinkcrystal.png" + " value=" + crystalThree + ">");

   var crystalFour = Math.floor(Math.random() * 11) + 1; 
   console.log("Crystal 4: " + crystalFour); 
   $("#four").html("<img src=" + "assets/image/clearcrystal.png" + " value=" + crystalFour + ">");

//values set for wins/losses
   var wins = 0; 
   console.log("wins: " + wins); 

   var losses = 0; 
   console.log("losses: " + losses); 

   var score = 0; 
   console.log("score: " + score); 

   var scoreDisplay = 0;
   var totalScore = 0;


$('#wins').text(wins);
$('#losses').text(losses);
$('#scoreDisplay').text(totalScore);


//wins
function youWin(){
    alert("You won!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }

//losses
function youLose(){
    alert ("You lose!");
      losses++;
      $('#losses').text(losses);
      reset()
    }    

//setting up clicks on crystals
$('#one').on ('click', function(){
    scoreDisplay = scoreDisplay + crystalOne;
    console.log("New ScoreDisplay= " + scoreDisplay);
    $('#scoreDisplay').text(scoreDisplay); 
          //setting wins/losses conditions
        if (scoreDisplay == Random){
          youWin();
        }
        else if (scoreDisplay > Random){
          youLose();
        }   
  })  
  $('#two').on ('click', function(){
    scoreDisplay = scoreDisplay + crystalTwo;
    console.log("New scoreDisplay= " + scoreDisplay);
    $('#scoreDisplay').text(scoreDisplay); 
        if (scoreDisplay == Random){
          youWin();
        }
        else if (scoreDisplay > Random){
          youLose();
        } 
  })  
  $('#three').on ('click', function(){
    scoreDisplay = scoreDisplay + crystalThree;
    console.log("New scoreDisplay= " + scoreDisplay);
    $('#scoreDisplay').text(scoreDisplay); 
        if (scoreDisplay == Random){
          youWin();
        }
        else if (scoreDisplay > Random){
          youLose();
        } 
  })  
  $('#four').on ('click', function(){
    scoreDisplay = scoreDisplay + crystalFour;
    console.log("New scoreDisplay= " + scoreDisplay);
    $('#scoreDisplay').text(scoreDisplay); 
        if (scoreDisplay == Random){
          youWin();
        }
        else if (scoreDisplay > Random){
          youLose();
        }  
    })

 //reset the game  
   function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    crystalOne= Math.floor(Math.random()*11+1);
    crystalTwo= Math.floor(Math.random()*11+1);
    crystalThree= Math.floor(Math.random()*11+1);
    crystalFour= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#scoreDisplay').text(totalScore);
    } 


})
