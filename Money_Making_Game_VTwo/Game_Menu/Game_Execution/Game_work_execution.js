//Work Function
function work() {
  //Declaration
  let funds, income;
  let tempwor = document.getElementsByName("workPerc");
  let wor = parseInt(tempwor[0].value);

  //Percentage Check 1 - if user input lower than 0
  if (wor >= 0) {
    //Percentage Check 2 - if user input less than 100
    if (wor <= 100) {
      alert("Your begin your day....");

      //Calculating money per hour
      funds = Math.floor(Math.random() * 201);
      if (funds < 15) {
        //Minimum Wage
        funds = 15;
      }

      //Day's worth of money
      income = funds * 8;
      alert("You made a cool " + income + " dollars today.");

      //Snappy one liners?
      if (funds == 200) {
        alert("Swimming in $$$$$$$$$$$!!!!!! Why not get yourself a bonus?");
        income = income + Math.floor(400 / Math.floor(Math.random() * 9));
      } else if (funds > 190) {
        alert("Swimming in that $$$$$$");
      } else if (funds > 150) {
        alert(
          "You made more money on your bathroom break than some people do an entire day, and you feel damn good about it!"
        );
      } else if (funds > 90) {
        alert(
          "You're pretty sure you worked at least some form of overtime, but who cares? We have MONEY"
        );
      } else if (funds > 60) {
        alert("Cashing this check was a great, GREAT feeling today.");
      } else if (funds > 40) {
        alert(
          "This was a nice day if you do say so yourself. Hopefully there wasn't overtime involved..."
        );
      } else if (funds > 25) {
        alert("Pretty fine, Pretty alright, pretty good day.");
      } else {
        alert("Another day, another paycheck...");
      }

      //Percentage Bit
      let percentage = wor / 100; //Create decimal
      let storedIncome = Math.ceil(income * percentage); //bank money
      let handIncome = income - storedIncome; //pocket money

      bank = bank + storedIncome; //Add money to bank
      onHand = onHand + handIncome; //Add money to pockets

      alert(storedIncome + " dollars were deposited in the bank.");
    } else {
      alert(
        "Percentage was over 100. Last I checked you aren't getting overtime. Lose a day."
      );
    }
  } else {
    alert("Error in input. Your contract was canceled, lose a day...");
  }
}

function handleWork(event) {
  work(); //Runs function
  print(); //Then prints the updated values
  event.preventDefault(); //Then stops page from resetting itself
  topFunction(); //Then brings user back to the top of page
}

let workDetect = document.getElementById("submitWork");
workDetect.addEventListener("click", handleWork);
