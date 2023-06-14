// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
let submitButton = document.getElementById("submit");
submitButton.disabled = true;
const fnamefield = document.getElementById("fname");
const lnamefield = document.getElementById("lname");
const phone_nrfield = document.getElementById("phone_nr");
const emailField = document.getElementById("email");
const agbField = document.getElementById("agb");

// (2) Interaktionen festlegen
emailField.addEventListener("keyup", () => {
  onChangeEmailField();
});
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// (3) Interaktionen Code
const onChangeEmailField = () => {
  if (emailField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const onChangefnameField = () => {
  if (fnameField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const onChangeagbField = () => {
  if (agbField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const onChangelnameField = () => {
  if (lnameField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};


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
};
