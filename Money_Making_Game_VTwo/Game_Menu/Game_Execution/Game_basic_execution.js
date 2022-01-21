//Does the very basic things, such as establishing and updating stats, working the popup menu, etc.

let onHand = 1000;
let bank = 0;
let saving = 0;
let time = 0;

//Updating values + keeping update
function print() {
  time = time + 1; //Time increment
  interestFormula();

  document.getElementById("time").innerHTML = "Day: " + time;
  document.getElementById("pocketCash").innerHTML = "On Hand Cash: $" + onHand;
  document.getElementById("bankCash").innerHTML = "Bank Amount: $" + bank;
  document.getElementById("heading_savings").innerHTML = "Savings: $" + saving;

  localStorage.clear();
  localStorage.setItem("dayLocal", time.toString());
  localStorage.setItem("onHandLocal", onHand.toString());
  localStorage.setItem("bankLocal", bank.toString());
  localStorage.setItem("savingsLocal", saving.toString());
}

//Validates custom user stat inputs
function popupvalidate(num) {
  if (num < 0) {
    //Checks if that integer is greater than zero
    alert(
      "Entered negative value for this. I can't stop you but I can show this annoying alert every time you do it."
    );
    num = 0;
  }

  return num;
}

//Adding custom values through popup menu
function popupcustom() {
  //Nested if statements to check if user actually put anything in text box
  if (document.getElementsByName("customday")[0].value) {
    if (document.getElementsByName("customhand")[0].value) {
      if (document.getElementsByName("custombank")[0].value) {
        if (document.getElementsByName("customsave")[0].value) {
          time = document.getElementsByName("customday")[0].value;
          onHand = document.getElementsByName("customhand")[0].value;
          bank = document.getElementsByName("custombank")[0].value;
          saving = document.getElementsByName("customsave")[0].value;

          time = popupvalidate(time);
          onHand = popupvalidate(onHand);
          bank = popupvalidate(bank);
          saving = popupvalidate(saving);

          document.getElementById("time").innerHTML = "Day: " + time; //No time increment
          document.getElementById("pocketCash").innerHTML =
            "On Hand Cash: $" + onHand;
          document.getElementById("bankCash").innerHTML =
            "Bank Amount: $" + bank;
          document.getElementById("heading_savings").innerHTML =
            "Savings: $" + saving;
          //No need for calculating interest growth

          document.querySelector(".popupback").style.display = "none"; //Close it at the end
        }
      }
    }
  }
}

let popdetect = document.getElementById("submitCustom");
popdetect.addEventListener("click", popupcustom);

//Getting a local save so you don't have to start over
function popuplocal() {
  time = parseInt(localStorage.getItem("dayLocal"));
  onHand = parseInt(localStorage.getItem("onHandLocal"));
  bank = parseInt(localStorage.getItem("bankLocal"));
  saving = parseInt(localStorage.getItem("savingsLocal"));
  alert("Save loaded.");

  document.getElementById("time").innerHTML = "Day: " + time; //No time increment
  document.getElementById("pocketCash").innerHTML = "On Hand Cash: $" + onHand;
  document.getElementById("bankCash").innerHTML = "Bank Amount: $" + bank;
  document.getElementById("heading_savings").innerHTML = "Savings: $" + saving;
  document.querySelector(".popupback").style.display = "none";
}

let popretrieve = document.getElementById("retriveLocal");
popretrieve.addEventListener("click", popuplocal);

//Deleting local save and current game
function popupreset() {
  localStorage.clear();
  onHand = 1000;
  bank = 0;
  saving = 0;
  time = 0;
  alert("Save cleared.");

  document.getElementById("time").innerHTML = "Day: " + time; //No time increment
  document.getElementById("pocketCash").innerHTML = "On Hand Cash: $" + onHand;
  document.getElementById("bankCash").innerHTML = "Bank Amount: $" + bank;
  document.getElementById("heading_savings").innerHTML = "Savings: $" + saving;
  document.querySelector(".popupback").style.display = "none";
}

let popreset = document.getElementById("resetLocal");
popreset.addEventListener("click", popupreset);

//Take user back to top of page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Below zero check
function belowZero(num) {
  if (num < 0) {
    return false;
  } else {
    return true;
  }
}
