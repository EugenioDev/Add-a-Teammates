const form = document.getElementById("form");
const cancelBtn = document.querySelector(".cancel");
const addteammates = document.querySelector(".add");

// const selected = document.getElementById('select')

function getOption() {
  const select = document.getElementById("select");
  const selectedValue = select.value;
  if (selectedValue) {
    elementoSelezionato = [[] + inputEmail];
    elementoSelezionato.push(selectedValue);
  }
}
let elementoSelezionato;
let inputEmail;

function validationEmail() {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  inputEmail = document.getElementById("input-form").value;
  if (inputEmail.match(regExp)) {
    alert("Congratulazioni hai aggiunto il tuo team!");
  } else {
    alert("Inserisci Email corretta");
  }
}

const buttonAdd = document.querySelector(".add");
buttonAdd.onclick = function () {
  validationEmail();
  getOption();
};
