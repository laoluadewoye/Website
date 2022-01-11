//Holds all the toggling for each Layer plus reset functions

//Turns off main layers
function resettoggle() {
  let wd = document.getElementById("withdrawLayer");
  let de = document.getElementById("depositLayer");
  let tf = document.getElementById("transferLayer");
  let gam = document.getElementById("gambleLayer");
  let wk = document.getElementById("workLayer");
  let sv = document.getElementById("savingsLayer");

  wd.style.display = "none";
  de.style.display = "none";
  tf.style.display = "none";
  gam.style.display = "none";
  wk.style.display = "none";
  sv.style.display = "none";
}

//Beginning of Main Button Toggling
function togglewithdraw() {
  resettoggle();
  let x = document.getElementById("withdrawLayer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggledeposit() {
  resettoggle();
  let x = document.getElementById("depositLayer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggletransfer() {
  resettoggle();
  let x = document.getElementById("transferLayer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function togglegamble() {
  resettoggle();
  let x = document.getElementById("gambleLayer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function togglework() {
  resettoggle();
  let x = document.getElementById("workLayer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function togglesavings() {
  resettoggle();
  let x = document.getElementById("savingsLayer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//Ending of Main Button Toggling

//Turns off gamble layers
function resetgambletoggle() {
  let gd = document.getElementById("gambleDouble");
  let gb = document.getElementById("gambleBlackjack");
  let gf = document.getElementById("gambleFight");
  let gbo = document.getElementById("gambleBigOne");

  gd.style.display = "none";
  gb.style.display = "none";
  gf.style.display = "none";
  gbo.style.display = "none";
}

//Beginning of Gamble Button Toggling
function toggledouble() {
  resetgambletoggle();
  let x = document.getElementById("gambleDouble");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleblackjack() {
  resetgambletoggle();
  let x = document.getElementById("gambleBlackjack");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleboxing() {
  resetgambletoggle();
  let x = document.getElementById("gambleFight");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function togglebigone() {
  resetgambletoggle();
  let x = document.getElementById("gambleBigOne");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//Ending of Gamble Button Toggling
