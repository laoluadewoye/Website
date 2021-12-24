//Blackjack

//Variables
let round = 0; //Counts rounds
let hit = 0; //Card picker
let dealer = 0; //Casino score
let you = 0; //User score
let prizeperc, trueprize; //Calculating Pot

function resetBJ(event) {
  //Also ends game
  print(); //Prints the updated values
  round = 0;
  hit = 0;
  dealer = 0;
  you = 0;

  //Updating Blackjack Stats to reflect reset
  document.getElementById("you").innerHTML = "You: " + you;
  document.getElementById("dealer").innerHTML = "Dealer: " + dealer;
  document.getElementById("round").innerHTML = "Round: " + (round + 1);

  topFunction(); //Brings user back to the top of page
  event.preventDefault(); //Then stops page from resetting itself
}

function userHit() {
  //User goes
  hit = Math.floor(Math.random() * 16); //Draw random card
  if (hit <= 10) {
    //Number cards
    alert("A " + hit + " was drawn");
  } else if (hit > 10) {
    if (hit < 15) {
      //Face cards
      alert("A face card was drawn. 10 points.");
      hit = 10;
    } else if (hit == 15) {
      //Ace card
      let ace = prompt("You drew an Ace! Do you want it to be 1 or 11: ");
      hit = ace;
      //Add input validation for 1 and 11
    }
  }
  you = you + hit; //Update your score
  document.getElementById("you").innerHTML = "You: " + you; //Update on game page
}

function dealerTurn() {
  //Dealer goes
  let dealerChoice = Math.floor(Math.random() * 2);
  if (dealerChoice == 0) {
    //Stand
    alert("Dealer chose to stand.");
    hit = 0;
  } else if (dealerChoice == 1) {
    //Hit
    alert("Dealer chose to hit");
    hit = Math.floor(Math.random() * 16); //Similar structure as user
    if (hit > 10) {
      if (hit < 15) {
        hit = 10;
      } else if (hit == 15) {
        //Automating picking Ace value
        if (dealer > 10) {
          hit = 1;
        } else if (dealer <= 10) {
          hit = 11;
        }
      }
    }
  }
  dealer = dealer + hit; //Update dealer score
  document.getElementById("dealer").innerHTML = "Dealer: " + dealer; //Show on webpage
}

function instantWin() {
  prizeperc = Math.floor(Math.random() * 51);
  trueprize = Math.floor(onHand * (prizeperc / 100));
  //Check if user has 21 - Win
  if (you == 21) {
    alert("You have won!");
    alert("Counting out " + trueprize + " into your hands...");
    onHand = onHand + trueprize;
    resetBJ();
  }
  //Check if dealer has 21 - Lose
  else if (dealer == 21) {
    alert("You have lost!");
    alert("Taking " + trueprize + " from your hands...");
    onHand = onHand - trueprize;
    resetBJ();
  }
  //Check if user > 21 - Lose
  else if (you > 21) {
    alert("You have lost!");
    alert("Taking " + trueprize + " from your hands...");
    onHand = onHand - trueprize;
    resetBJ();
  }
  //Check if dealer > 21 - Win
  else if (dealer > 21) {
    alert("You have won!");
    alert("Counting out " + trueprize + " into your hands...");
    onHand = onHand + trueprize;
    resetBJ();
  }
}

function endCheck() {
  //Longevity outcomes
  prizeperc = Math.floor(Math.random() * 51);
  trueprize = Math.floor(onHand * (prizeperc / 100));
  document.getElementById("you").innerHTML = "You: " + you;
  document.getElementById("dealer").innerHTML = "Dealer: " + dealer;
  if (round == 3) {
    alert("Three rounds have been played. Tallying results...");
    //Check if both have same number - Tie
    if (you == dealer) {
      alert("It was a tie!");
      resetBJ();
    }
    //Check if both have under 10 - Tie
    else if (you < 10 && dealer < 10) {
      alert("It was a tie!");
      resetBJ();
    }
    //First check if player is under 10 - Lose
    else if (you < 10) {
      alert("You have lost!");
      alert("Taking " + trueprize + " from your hands...");
      onHand = onHand - trueprize;
      resetBJ();
    }
    //Then check if dealer is under 10 - Win
    else if (dealer < 10) {
      alert("You have won!");
      alert("Counting out " + trueprize + " into your hands...");
      onHand = onHand + trueprize;
      resetBJ();
    }
    //Then check if player < dealer - Win
    else if (you < dealer) {
      alert("You have won!");
      alert("Counting out " + trueprize + " into your hands...");
      onHand = onHand + trueprize;
      resetBJ();
    }
    //Then check if dealer < player - Lose
    else if (dealer < you) {
      alert("You have lost!");
      alert("Taking " + trueprize + " from your hands...");
      onHand = onHand - trueprize;
      resetBJ();
    }
  }
}

function turnHit(event) {
  userHit();
  dealerTurn();
  event.preventDefault(); //Needed specifically for BJ layer
  instantWin(); //Checks main win conditions
  round = round + 1;
  document.getElementById("round").innerHTML = "Round: " + (round + 1);
  endCheck(); //Checks round count
}

function turnStand(event) {
  alert("You chose to stand."); //No need to do anything but announce
  dealerTurn();
  event.preventDefault(); //Needed specifically for BJ layer
  instantWin(); //Checks main win conditions
  round = round + 1;
  document.getElementById("round").innerHTML = "Round: " + (round + 1);
  endCheck(); //Checks round count
}

let hitDetect = document.getElementById("hit"); //User's Hit Button
hitDetect.addEventListener("click", turnHit);

let standDetect = document.getElementById("stand"); //User's Stand Button
standDetect.addEventListener("click", turnStand);
