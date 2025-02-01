let timeLeft = 100; // Tiempo en segundos
const timerElement = document.getElementById("timer");

// Preguntas para cada módulo (5 preguntas por módulo)
const questionsModule1 = [
  {
    question: "¿Cuál de estos juegos tradicionales se juega con una cuerda?",
    options: ["Trompo", "Rayuela", "Salta la cuerda", "Canicas"],
    correct: 2,
    hint: "En este juego, los niños deben saltar sin tocar la cuerda mientras esta gira."
  },
  {
    question: "¿Qué necesitas para jugar al Trompo?",
    options: ["Un balón", "Un aro", "Un trompo y una piola", "Una cuerda"],
    correct: 2,
    hint: "Este juguete de madera gira cuando le das un buen impulso con la cuerda."
  },
  {
    question: "¿Cómo se gana en el juego de las canicas?",
    options: ["Lanzando todas las canicas al agua", "Escondiendo las canicas", "Contando las canicas más rápido", "Sacando las canicas de los demás del círculo"],
    correct: 3,
    hint: "La clave de este juego es apuntar bien para sacar las canicas del otro jugador."
  },
  {
    question: "¿En qué juego tradicional se dibuja un tablero en el suelo y se salta en un pie?",
    options: ["Rayuela", "Escondidas", "Palo encebado", "Trompo"],
    correct: 0,
    hint: "Se juega con un dibujo de cuadros en el suelo y hay que lanzar una piedra."
  },
  {
    question: "¿Qué juego tradicional consiste en esconderse mientras otra persona busca?",
    options: ["Canicas", "Escondidas", "Salta la cuerda", "Trompo"],
    correct: 1,
    hint: "En este juego, la persona que cuenta debe encontrar a los demás que están ocultos."
  }
];

const questionsModule2 = [
  // Añade 5 preguntas para el módulo 2
  {
    question: "¿Qué deporte se juega con los pies y un balón?",
    options: ["Baloncesto", "Fútbol", "Tenis", "Natación"],
    correct: 1,
    hint: "Este es el deporte más popular en el mundo y se juega en una cancha grande."
  },
  {
    question: "¿Cuántos jugadores tiene un equipo de ecua-voley en la cancha?",
    options: ["5", "6", "3", "11"],
    correct: 2,
    hint: "En este juego los jugadores deben golpear el balón sin que toque el suelo."
  },
  {
    question: "¿En qué deporte se usa un bate para golpear la pelota?",
    options: ["Fútbol", "Natación", "Atletismo", "Béisbol"],
    correct: 3,
    hint: "En este deporte, un jugador lanza la pelota y otro debe golpearla con un bate."
  },
  {
    question: "¿Dónde se juegan los partidos de tenis?",
    options: ["En el agua", "En una cancha", "En la arena", "En el aire"],
    correct: 1,
    hint: "Este deporte se juega con una raqueta y una pelota pequeña en una superficie especial."
  },
  {
    question: "¿Cuál de estos deportes se practica en el agua?",
    options: ["Judo", "Gimnasia", "Natación", "Ciclismo"],
    correct: 1,
    hint: "En este juego, la persona que cuenta debe encontrar a los demás que están ocultos."
  }
];

const questionsModule3 = [
  // Añade 5 preguntas para el módulo 3
  {
    question: "¿Qué parte del cuerpo es muy importante para hacer gimnasia?",
    options: ["Los ojos", "Los brazos y piernas", "Las orejas", "Los dedos"],
    correct: 1,
    hint: " Los gimnastas necesitan ser fuertes y flexibles para hacer piruetas y saltos."
  },
  {
    question: "¿En qué tipo de gimnasia se usan cintas y pelotas?",
    options: ["Gimnasia rítmica ", "Gimnasia de fuerza", "Gimnasia en el agua", "Gimnasia de velocidad"],
    correct: 0,
    hint: "En esta disciplina, los movimientos son suaves y elegantes, como en un baile."
  },
  {
    question: "¿Cuál de estos movimientos se hace en gimnasia?",
    options: ["Voltereta", "Remate", "Driblar", "Nadar"],
    correct: 0,
    hint: "Es un giro en el aire o en el suelo, muy común en los ejercicios de gimnasia."
  },
  {
    question: "¿En qué superficie suelen entrenar los gimnastas?",
    options: ["En el agua", "En la arena", "En una colchoneta", "En la calle"],
    correct: 2,
    hint: "Esta superficie es blanda para evitar golpes cuando los gimnastas caen."
  },
  {
    question: "¿Qué se necesita para hacer gimnasia de manera segura?",
    options: ["Comer dulces", "Un entrenador y calentar bien", "No dormir antes", "Estar descalzo"],
    correct: 1,
    hint: "Antes de empezar los ejercicios, es importante preparar los músculos para evitar lesiones."
  }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let hintsUsed = 0; // Contador para las pistas utilizadas



/*function startModule(moduleNumber) {
  document.getElementById("moduleScreen").style.display = "none";
  document.getElementById("fondodelJuego").style.display = "block";

  switch (moduleNumber) {
    case 1:
      currentQuestions = questionsModule1;
      break;
    case 2:
      currentQuestions = questionsModule2;
      break;
    case 3:
      currentQuestions = questionsModule3;
      break;
  }

  startTimer();
  loadQuestion();
}*/

let startTime;
let correctAnswersCount = 0;

function startModule(moduleNumber) {
  startTime = new Date();
  correctAnswersCount = 0;
  document.getElementById("moduleScreen").style.display = "none";
  document.getElementById("fondodelJuego").style.display = "block";
  document.getElementById("completionScreen").style.display = "none";

  switch (moduleNumber) {
    case 1:
      currentQuestions = questionsModule1;
      break;
    case 2:
      currentQuestions = questionsModule2;
      break;
    case 3:
      currentQuestions = questionsModule3;
      break;
  }

  startTimer();
  loadQuestion();
}

function showCompletionScreen() {
  const endTime = new Date();
  const timeTaken = Math.floor((endTime - startTime) / 1000);
  document.getElementById("fondodelJuego").style.display = "none";
  document.getElementById("completionScreen").style.display = "block";
  document.getElementById("completedQuestions").textContent = currentQuestions.length;
  document.getElementById("correctAnswers").textContent = correctAnswersCount;
  document.getElementById("timeTaken").textContent = `${timeTaken}s`;
  document.getElementById("hintsUsed").textContent = hintsUsed;
}

function returnToMainModule() {
  document.getElementById("moduleScreen").style.display = "block";
  document.getElementById("fondodelJuego").style.display = "none";
  document.getElementById("completionScreen").style.display = "none";
}

function checkAnswer(index) {
  const gameContainer = document.getElementById("fondodelJuego");

  if (index === currentQuestions[currentQuestionIndex].correct) {
    correctAnswersCount++;
    gameContainer.innerHTML = `
      <img src="imagenes/exito.png" alt="¡Respuesta correcta!" style="max-width: 100%; height: auto; margin-top: 20px;" id="successImage" tabindex="7">
      <button onclick="nextQuestion()" style="margin-top: 20px;" id="nextButton" tabindex="8">Siguiente</button>
    `;

    setTimeout(() => {
      document.getElementById("successImage").focus();
    }, 100);

  } else {
    gameContainer.innerHTML = `
      <img src="imagenes/error.png" alt="Respuesta incorrecta" style="max-width: 400px; height: 400px; margin-top: 20px;" id="errorImage" tabindex="7">
      <button id="botonReintentar" onclick="retryQuestion()" style="margin-top: 20px;" id="retryButton" tabindex="8">Intentar de nuevo</button>
    `;

    setTimeout(() => {
      document.getElementById("errorImage").focus();
    }, 100);
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showCompletionScreen();
  }
}

// Resto del código (temporizador, carga de preguntas, etc.) se mantiene igual

// Función para iniciar el temporizador
function startTimer() {
  const interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.textContent = `${timeLeft}s`;
    } else {
      clearInterval(interval);
      endGame(); // Finaliza el juego si se agota el tiempo
    }
  }, 1000);
}

// Función para mostrar mensaje al finalizar el tiempo
function endGame() {
  const gameContainer = document.getElementById("fondodelJuego");
  gameContainer.innerHTML = `
    <h1 tabindex="7">Se agotó el tiempo. Intenta nuevamente.</h1>
    <button onclick="restartGame()" tabindex="8">Reiniciar</button>
  `;
}

// Función para reiniciar el juego
function restartGame() {
  currentQuestionIndex = 0;
  timeLeft = 45;
  hintsUsed = 0; // Reiniciamos el contador de pistas
  startTimer();
  loadQuestion();
}

// Llama al temporizador al cargar la página
window.onload = function () {
  document.getElementById("moduleScreen").style.display = "block";
  document.getElementById("fondodelJuego").style.display = "none";
};

// Función actualizada para cargar una pregunta con opción de ayuda
function loadQuestion() {
  const gameContainer = document.getElementById("fondodelJuego");
  const questionData = currentQuestions[currentQuestionIndex];

  gameContainer.innerHTML = `
    <h1 id="question" tabindex="7">${questionData.question}</h1>
    <div id="answers" class="opcionesRespuesta">
      ${questionData.options
        .map(
          (option, index) =>
            `<button onclick="checkAnswer(${index})" onkeypress="handleKeyPress(event, ${index})" tabindex="${8 + index}">${option}</button>`
        )
        .join("")}
    </div>
    <button id="helpButton" onclick="showHint()" tabindex="${8 + questionData.options.length}">
      <span role="img" aria-label="Ayuda">❓</span> Necesito una pista
    </button>
    <p id="hint" class="hint-text" style="display: none;" tabindex="${9 + questionData.options.length}"></p>
    <p id="feedback" tabindex="${10 + questionData.options.length}"></p>
  `;

  document.querySelectorAll("#answers button").forEach(button => {
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        button.click();
      }
    });
  });
}

// Nueva función para mostrar la pista
function showHint() {
  const hintElement = document.getElementById("hint");
  const questionData = currentQuestions[currentQuestionIndex];
  
  if (hintElement.style.display === "none") {
    hintElement.textContent = questionData.hint;
    hintElement.style.display = "block";
    hintElement.focus(); // Enfocamos la pista para lectores de pantalla
    hintsUsed++;
  } else {
    hintElement.style.display = "none";
  }
}

function checkAnswer(index) {
  const gameContainer = document.getElementById("fondodelJuego");

  if (index === currentQuestions[currentQuestionIndex].correct) {
    // Respuesta correcta
    gameContainer.innerHTML = `
      <img src="imagenes/exito.png" alt="¡Respuesta correcta!" style="max-width: auto; height: auto; margin-top: 10px;" id="successImage" tabindex="7">
      <button onclick="nextQuestion()" style="margin-top: 20px;" id="nextButton" tabindex="8">Siguiente</button>
    `;

    // Focalizar primero la imagen y después el botón
    setTimeout(() => {
      document.getElementById("successImage").focus();
    }, 100);

  } else {
    // Respuesta incorrecta
    gameContainer.innerHTML = `
      <img src="imagenes/error.png" alt="Respuesta incorrecta" style="max-width: 400px; height: 400px; margin-top: 20px;" id="errorImage" tabindex="7">
      <button id="botonReintentar" onclick="retryQuestion()" style="margin-top: 20px;" id="retryButton" tabindex="8">Intentar de nuevo</button>
    `;

    // Focalizar primero la imagen y después el botón
    setTimeout(() => {
      document.getElementById("errorImage").focus();
    }, 100);
  }
}

// Función para cargar la misma pregunta nuevamente al fallar
function retryQuestion() {
  loadQuestion();
}

// Función actualizada para cargar la siguiente pregunta y mostrar estadísticas de pistas
/*function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    document.getElementById("fondodelJuego").innerHTML = `
      <h1 tabindex="7">¡Juego completado!</h1>
      <p tabindex="8">Usaste ${hintsUsed} pistas de ${currentQuestions.length} preguntas.</p>
      <img src="imagenes/finalizado.png" alt="Juego completado" style="max-width: 100%; height: auto; margin-top: 20px;" tabindex="9">
      <button onclick="restartGame()" tabindex="10">Reiniciar</button>
    `;
  }
}*/

function showInfo() {
  document.getElementById("infoModal").style.display = "block";
  document.querySelector("#infoModal .close").focus(); // Enfocar la "X" al abrir el modal
}

function hideInfo() {
  document.getElementById("infoModal").style.display = "none";
  document.getElementById("infoButton").focus(); // Enfocar el botón de información al cerrar
}

// Función para cerrar el modal al presionar "Enter" en la "X"
function handleCloseKeyPress(event) {
  if (event.key === "Enter") {
    hideInfo();
  }
}





