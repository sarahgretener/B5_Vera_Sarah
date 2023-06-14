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

const dino = document.getElementById("game-dino");
const rock = document.getElementById("game-rock");
const score = document.getElementById("game-score");
const gameBox = document.getElementById("game");
const background = document.getElementById("game-background");
const gameOver = document.getElementById("game-end");
const winnerText = document.getElementById("game-winner");
const startScreen = document.getElementById("game-start");

let gameLoopInterval = 0;
const POINTS_TO_WIN = 100;

const startGame = () => {
  gameOver.classList.add("hidden");
  background.classList.add("bg-animation");
  rock.classList.add("rock-animation");
  startScreen.classList.add("hidden");
  resetScore();
  startGameLoop();
};

const resetScore = () => {
  score.innerText = 0;
};

const jump = () => {
  dino.classList.add("jump-animation");
  setTimeout(() => {
    dino.classList.remove("jump-animation");
  }, 500);
};

const dieAnimation = () => {
  dino.classList.add("dino-dies");
  return new Promise((resolve) =>
    setTimeout(() => {
      dino.classList.remove("dino-dies");
      resolve();
    }, 500)
  );
};

gameBox.addEventListener("click", (event) => {
  if (!gameLoopInterval) {
    startGame();
  } else {
    if (!dino.classList.contains("jump-animation")) {
      jump();
    }
  }
});

const stopGame = async () => {
  await dieAnimation();
  background.classList.remove("bg-animation");
  rock.classList.remove("rock-animation");
  startScreen.classList.remove("hidden");
  gameLoopInterval = clearInterval(gameLoopInterval);
  gameOver.classList.remove("hidden");
  if (Number(score.innerText) + 1 >= POINTS_TO_WIN) {
    winnerText.classList.remove("hidden");
  }
};

const startGameLoop = () => {
  gameLoopInterval = window.setInterval(() => {
    const dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );
    const rockLeft = parseInt(
      window.getComputedStyle(rock).getPropertyValue("left")
    );

    score.innerText = Number(score.innerText) + 1;

    if (rockLeft < 0) {
      rock.classList.add("hidden");
    } else {
      rock.classList.remove("hidden");
    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
      stopGame();
    }
  }, 50);
};
