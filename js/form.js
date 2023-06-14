// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const gameContainer = document.getElementById("game-container");
const thankYouContainer = document.getElementById("thankYouContainer");
let submitButton = document.getElementById("submit");
submitButton.disabled = true;
const fnamefield = document.getElementById("fname");
const lnamefield = document.getElementById("lname");
const phone_nrfield = document.getElementById("phone_nr");
const emailField = document.getElementById("email");






// (2) Interaktionen festlegen
emailField.addEventListener("keyup", () => {
  onChangeEmailField();
});
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});




const error = document.getElementById("error");

if (submitButton.disabled = true){
  error.innerHTML = "Bitte fülle das Formular aus."}
else {
  error.innerHTML = ""}



const errorMessage1 = document.getElementById("errorMessage1");
const errorMessage2 = document.getElementById("errorMessage2");
const errorMessage3 = document.getElementById("errorMessage3");

// auch: input
fnamefield.addEventListener("keyup", (event) => {
  const formValue = fnamefield.value.trim();
  if (formValue.length > 2) {
   
    errorMessage1.innerHTML = "";
  } else {
    submitButton.disabled = true;
    errorMessage1.innerHTML = "Der eingegebene Vorname ist zu kurz.";
  }
});



// auch: input
lnamefield.addEventListener("keyup", (event) => {
  const formValue = lnamefield.value.trim();
  if (formValue.length > 2) {
    
    errorMessage2.innerHTML = "";
  } else {
    submitButton.disabled = true;
    errorMessage2.innerHTML = "Der eingegebene Nachname ist zu kurz.";
  }
});



emailField.addEventListener("keyup", (event) => {
  const formValue = emailField.value.trim();
  if (formValue.length > 3) {
    submitButton.disabled = false;
    errorMessage3.innerHTML = "";
    error.innerHTML = "";

  } else {
    submitButton.disabled = true;
    errorMessage3.innerHTML = "Die Email ist zu kurz.";
  }
});

  


// (3) Interaktionen Code



const onClickSubmit = async () => {
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b5", // SQL Gruppen Namen
    pw: "554b6920", // SQL Passwort
    tableName: "client", // Name der Tabelle in der SQL Datenbank

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
      fname: fnamefield.value,
      lname: lnamefield.value,
      phone_nr: phone_nrfield.value,
      email: emailField.value,
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular, eine Dankeschön Nachricht erscheint
  formContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");

};









// Wählt das Element mit der ID "submit" aus und weist es der Variable submitButton zu.




