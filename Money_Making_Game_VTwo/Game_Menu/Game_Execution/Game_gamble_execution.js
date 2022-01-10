//Gamble Function - Controls the Double Slot, Boxing Ring, and THE BIG ONE

//Double Function
function double() {
  let tempdoub = document.getElementsByName("doubleAmount");
  let doub = parseInt(tempdoub[0].value);
  if (belowZero(doub) != false) {
    //Valid input check
    if (doub <= onHand) {
      //Valid input check
      let chance = Math.floor(Math.random() * (366 - time)); //slowly but surely will lose potency
      alert("The slot spins until...");
      if (chance > 180) {
        onHand = onHand + doub; //Get money back, plus more of bet
        alert("You get three fruit in a row. You win!");
      } else {
        onHand = onHand - doub; //Just lose money that was in the air
        alert("It lands on....nothing. You lose.");
      }
    } else {
      alert("You cannot double more than you have.");
      alert(
        "The casino guards catches you trying to exploit the machine and kick you out."
      );
      onHand = onHand - 100; //Penalty for incorrect input
      alert("Lose 100 dollars and a day.");
    }
  } else {
    //Bruh
    alert("You can't ASK for money from the slot...");
    alert("Eventually you are asked to leave though. Lose a day.");
  }
}

function handleDouble(event) {
  double(); //Runs function
  print(); //Then prints the updated values
  event.preventDefault(); //Then stops page from resetting itself
  topFunction(); //Then brings user back to the top of page
}

let doubleDetect = document.getElementById("submitDoub");
doubleDetect.addEventListener("click", handleDouble);

//Boxing Function
function boxing() {
  let yourShare;
  //Getting inputs
  let pf = document.getElementsByName("pickFighter");
  let fighter = parseInt(pf[0].value);

  let tempbox = document.getElementsByName("FightAmount");
  let box = parseInt(tempbox[0].value);

  //fighter check
  if (fighter === 1 || fighter === 2) {
    //Three further checks needed - below 500 check, max check, and bonus below 0 check
    if (box > 500) {
      if (box <= onHand) {
        //Establishing betting sides
        let team1 = Math.floor(Math.random() * 24);
        let team2 = 23 - team1;

        //Establishing the group pot
        let groupPot = Math.floor(Math.random() * 27000) + 13000; //A pot from 13k to 40k

        //Win condition to match
        let winner = Math.floor(Math.random() * 2) + 1; //0 and 1 --> 1 and 2

        //Some dialogue
        alert(
          "With your bet placed, you join your team, rooting for boxer " +
            fighter +
            " at their corner."
        );
        alert("The fight begins at the bell...");

        //Calculations
        if (fighter == winner) {
          alert("Your boxer has won!");
          if (winner == 1) {
            alert(
              "You and " +
                team1 +
                " others won the grand pot of $" +
                groupPot +
                "!"
            );
            yourShare = Math.ceil(groupPot / team1);
          } else if (winner == 2) {
            alert(
              "You and " +
                team2 +
                " others won the grand pot of $" +
                groupPot +
                "!"
            );
            yourShare = Math.ceil(groupPot / team2);
          }
          alert("Your share is $" + yourShare);
          onHand = onHand + yourShare;
        } else {
          alert(
            "Your boxer has unfortunately lost. You lose your contribution."
          );
          onHand = onHand - box;
        }
      }
    } else {
      alert(
        "I am sorry, but I cannot allow such a low pot addition to our sacred sport."
      );
      if (box <= 0) {
        alert("Wait a moment, this isn't even anything!");
        alert("How dare you insult us like this!");
        alert(
          "[You are promptly taken out back and dealt with for the insult. Lose 50 dollars and a day."
        );
        onHand = onHand - 50;
      } else {
        alert("You are escorted away from the boxing event. Lose a day.");
      }
    }
  } else {
    alert(
      "There are no other figters. Disappointed fighter " +
        fighter +
        " is not there, you pack it up and leave. Lose a day being bummed."
    );
  }
}

function handleBoxing(event) {
  boxing(); //Runs function
  print(); //Then prints the updated values
  event.preventDefault(); //Then stops page from resetting itself
  topFunction(); //Then brings user back to the top of page
}

let boxingDetect = document.getElementById("submitBox");
boxingDetect.addEventListener("click", handleBoxing);

//Big One Function
function bigone() {
  let big = document.getElementsByName("bigPot");
  let one = parseInt(big[0].value);

  if (belowZero(one) != false) {
    //Valid input check
    if (one >= onHand * 0.75) {
      //75% min check
      let bigChance = Math.floor(Math.random() * 5) + 1;
      alert("You have a " + bigChance + "% chance of getting this!");

      let trueBigChance = Math.floor(Math.random() * 101); //Pick a number between 1 and 100
      let crazyPot = one * (6 - bigChance) * 20;
      alert("You watch the alert screen to see what comes up...");

      if (trueBigChance <= bigChance) {
        //Compare that number to the small number to simulate the chance
        alert("Your outcome is $" + crazyPot + "!!!!");
        alert(
          "Say, I'm not supposed to leave my job right now, but lets say you and I go celebrating tonight?"
        );
        onHand = onHand + crazyPot; //Add the gold struck
      } else {
        alert("Your outcome is $0...");
        alert("...");
        alert(
          "Don't even stress about it, no one wins these things anyways. Here, let me get you a drink on me..."
        );
        onHand = onHand - one; //Take away all the money
      }
    } else {
      //An out
      alert(
        "Smart choice. I'm not joking or being sarcastic, it is fine that you don't want to do this."
      );
    }
  } else {
    //For cheaters
    alert("...did you just try to cheat the BIG ONE?");
    alert("NO ONE CHEATS THE BIG ONE");
    alert("SECURITY!!!!");
    alert(
      "(After a rough boot out of the casino and into the back alley, you notice half your money is gone. Lose a day...)"
    );
    onHand = Math.floor(onHand / 2);
  }
}

function handleBig(event) {
  bigone(); //Runs function
  print(); //Then prints the updated values
  event.preventDefault(); //Then stops page from resetting itself
  topFunction(); //Then brings user back to the top of page
}

let bigDetect = document.getElementById("submitBig");
bigDetect.addEventListener("click", handleBig);
