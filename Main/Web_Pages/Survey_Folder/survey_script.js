function main() {
  let optionchecked, laptopchecked;
  let optionChoices = document.getElementsByName("like");
  let laptopChoices = document.getElementsByName("local");
  let feedback = document.getElementById("Q2_textbox").value;
  let addition = document.getElementById("Q4_textbox").value;

  for (let i = 0; i < optionChoices.length; i++) {
    if (optionChoices[i].checked) {
      alert("Q1 Answer: " + optionChoices[i].value);
      optionchecked = optionChoices[i].value;
    }
  }

  alert("Q2 Answer: " + feedback);

  for (let i = 0; i < laptopChoices.length; i++) {
    if (laptopChoices[i].checked) {
      alert("Q3 Answer: " + laptopChoices[i].value);
      laptopchecked = laptopChoices[i].value;
    }
  }

  alert("Q4 Answer: " + addition);

  const fs = require("fs");

  let data =
    "\r Answer to Q1: " +
    optionchecked +
    " \r\n " +
    "Answer to Q2: " +
    feedback +
    " \r\n " +
    "Answer to Q3: " +
    laptopchecked +
    " \r\n " +
    "Answer to Q4: " +
    addition +
    "\r\n\n"; 

  fs.writeFile("survey_file.txt", data, (err) => {
    if (err) {
      alert("There was an error confirming data.");
      return;
    }
  });

}

function handleForm(event) {
  main();
  event.preventDefault();
}

let form = document.getElementById("submit");
form.addEventListener("click", handleForm);