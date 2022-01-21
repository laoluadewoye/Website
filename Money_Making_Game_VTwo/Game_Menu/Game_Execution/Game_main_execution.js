//Execution script - Manages Withdraw, Deposit, Savings, and Transfer

//Transfer Function
function altrism() {
  //Donation amount
  let don = document.getElementsByName("TransferAmount");
  let donation = parseInt(don[0].value);

  //Name and Address
  let name = document.getElementById("transferName").value;
  let address = document.getElementById("transferAddress").value;

  if (belowZero(donation) != false) {
    //Input validation
    if (donation < bank) {
      if (donation == bank) {
        alert(
          "I hope when you wake up, you have a great day and meet great people in your life."
        );
      }
      alert("Thank you for donating to " + name + ".");
      alert("Sending to: " + address + "...");
      bank = bank - donation;
      alert("Transfer complete. :)");
    } else {
      alert(
        "Very welcome gesture, but you can't give money you don't have. Try adding to your bank account first."
      );
    }
  } else {
    alert("You are the evilest of evil for that.");
    alert(
      "I've never seen someone so despicable than to try to TAKE money from someone."
    );
    alert("Especially " + name + ".");
    alert("I hope you got what you wanted, you sick person.");
    alert("[I apologize if it was an error but if it wasn't then booo]");
  }
}

function handleTransfer(event) {
  altrism(); //Runs function
  print(); //Then prints the updated values
  event.preventDefault(); //Then stops page from resetting itself
  topFunction(); //Then brings user back to the top of page
}

let transDetect = document.getElementById("submitT");
transDetect.addEventListener("click", handleTransfer);

//Interest Function
function interestFormula() {
  let increwed = Math.pow(saving * 2.71828, time * (1 / 360));
  saving = saving + Math.ceil(increwed);
}

function savings() {
  //Getting value from radio buttons
  let transactionChecked;
  let transaction = document.getElementsByName("exchange");

  for (let i = 0; i < transaction.length; i++) {
    //Seeing which button was selected
    if (transaction[i].checked) {
      transactionChecked = transaction[i].value;
    }
  }

  //'Normal' value getting
  let tempsav = document.getElementsByName("SavingsAmount");
  let sav = parseInt(tempsav[0].value);

  //Caluclation
  if (belowZero(sav) != false) {
    if (transactionChecked == "Added") {
      //Add money
      if (sav <= bank) {
        alert("Transaction: $" + sav + " was " + transactionChecked + ".");
        bank = bank - sav;
        saving = saving + sav;
      } else {
        alert(
          "You cannot invest more than you have in your bank account. Lose a day."
        );
      }
    } else if (transactionChecked == "Removed") {
      //Take money
      if (sav <= bank) {
        alert("Transaction: $" + sav + " was " + transactionChecked + ".");
        bank = bank + sav;
        saving = saving - sav;
      } else {
        alert(
          "You cannot draw more than you have in your savings account. Lose a day."
        );
      }
    }
  } else {
    alert(
      "Clerical Error. No transaction in your savings account as a result. Lose one day."
    );
  }
}

function handleSavings(event) {
  savings(); //Runs function
  print(); //Then prints the updated values
  event.preventDefault(); //Then stops page from resetting itself
  topFunction(); //Then brings user back to the top of page
}

let savDetect = document.getElementById("submitS");
savDetect.addEventListener("click", handleSavings);

//Withdraw Function
function withdraw() {
  let tempwit = document.getElementsByName("withdrawAmount");
  let wit = parseInt(tempwit[0].value);
  if (belowZero(wit) != false) {
    //Valid Input check
    if (wit <= bank) {
      //Valid Input check
      alert(wit + " dollars was taken out of the bank.");
      bank = bank - wit; //Takes money from account
      onHand = onHand + wit; //Puts money in pockets
    } else {
      alert(
        "You cannot draw more money than you have in your account. Lose a day."
      );
    }
  } else {
    alert("Clerical Error. No money was moved in transaction. Lose a day.");
  }
}

function handleWithdraw(event) {
  withdraw(); //Runs function
  print(); //Then prints the updated values
  event.preventDefault(); //Then stops page from resetting itself
  topFunction(); //Then brings user back to the top of page
}

let witDetect = document.getElementById("submitW");
witDetect.addEventListener("click", handleWithdraw);

//Deposit Function
function deposit() {
  let tempdep = document.getElementsByName("depositAmount");
  let dep = parseInt(tempdep[0].value);
  if (belowZero(dep) != false) {
    //Valid Input check
    if (dep <= onHand) {
      //Valid Input check
      alert(dep + " dollars was added to the bank.");
      bank = bank + dep; //Add money to bank
      onHand = onHand - dep; //TAke money from pockets
    } else {
      alert(
        "You cannot add more money than you have in your pocket. Lose a day."
      );
    }
  } else {
    alert("Clerical Error. No money was moved in transaction. Lose a day.");
  }
}

function handleDeposit(event) {
  deposit(); //Runs function
  print(); //Then prints the updated values
  event.preventDefault(); //Then stops page from resetting itself
  topFunction(); //Then brings user back to the top of page
}

let depDetect = document.getElementById("submitD");
depDetect.addEventListener("click", handleDeposit);
