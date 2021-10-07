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

/*
* Mauro Madonia - 07/10/2021
*
* Modifica 
* L'idea è quella di creare una funzione che ti possa servire per controllare diversi Input senza dover riscrivere 
* più volte gli stessi controlli, ma avere tutto in una, che una volta impostata
* puoi riutilizzare anche in altri lavori e richiamarla.
* 
* Passando alla funzione l'input e la tipologia, la funzione checkInput in automatico andrà ad effettuare il controllo.
*/

function validationEmail() {
  
  inputEmail = document.getElementById("input-form").value;
  
  if (checkInput(inputEmail , 'email')) {
    alert("Congratulazioni hai aggiunto il tuo team!");
  } else {
    alert("Inserisci Email corretta");
  }
}


   function checkInput(data , type){

      let pttrns = new Map();
     
     /* Setting dei patterns per i controlli */
      pttrns.set('email', /^([a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[.]+[a-z-A-Z]{2,3})$/u);
      pttrns.set('string', /^([\p{L}\s]+)$/u);
      
     /* Ritorna il risultato */
      return data.match(pttrns.get(type));
    
    
    }
