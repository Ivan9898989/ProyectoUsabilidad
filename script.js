let timeLeft = 45; // Tiempo en segundos
const timerElement = document.getElementById("timer");

// Lista de preguntas y respuestas
const questions = [
  {
    question: "¿Cuál es la capital de Ecuador?",
    options: ["Quito", "Guayaquil", "Cuenca", "Loja"],
    correct: 0
  },
  {
    question: "¿Cuántos continentes hay en el mundo?",
    options: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Marte", "Júpiter", "Saturno", "Neptuno"],
    correct: 1
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Atlántico", "Pacífico", "Índico", "Ártico"],
    correct: 1
  }
];

let currentQuestionIndex = 0;

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
  startTimer();
  loadQuestion();
}

// Llama al temporizador al cargar la página
window.onload = function () {
  startTimer();
  loadQuestion();
};

// Función para cargar una pregunta
function loadQuestion() {
  const gameContainer = document.getElementById("fondodelJuego");
  const questionData = questions[currentQuestionIndex];

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
    <p id="feedback" tabindex="${8 + questions[currentQuestionIndex].options.length}"></p>
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

// Función para comprobar la respuesta
function checkAnswer(index) {
  const gameContainer = document.getElementById("fondodelJuego");

  if (index === questions[currentQuestionIndex].correct) {
    // Respuesta correcta
    gameContainer.innerHTML = `
      <img src="imagenes/exito.png" alt="¡Respuesta correcta!" style="max-width: 100%; height: auto; margin-top: 20px;" tabindex="8">
      <button onclick="nextQuestion()" style="margin-top: 20px;" tabindex="9">Siguiente</button>
    `;
  } else {
    // Respuesta incorrecta
    gameContainer.innerHTML = `
      <img src="imagenes/error.png" alt="Respuesta incorrecta" style="max-width: 100%; height: auto; margin-top: 20px;" tabindex="8">
      <button onclick="retryQuestion()" style="margin-top: 20px;" tabindex="9">Intentar de nuevo</button>
    `;
  }
}

// Función para cargar la misma pregunta nuevamente al fallar
function retryQuestion() {
  loadQuestion();
}

// Función para cargar la siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("fondodelJuego").innerHTML = `
      <h1 tabindex="7">¡Juego completado!</h1>
      <img src="imagenes/finalizado.png" alt="Juego completado" style="max-width: 100%; height: auto; margin-top: 20px;" tabindex="8">
      <button onclick="restartGame()" tabindex="9">Reiniciar</button>
    `;
  }
}

function checkAnswer(index) {
  const gameContainer = document.getElementById("fondodelJuego");

  if (index === questions[currentQuestionIndex].correct) {
    // Respuesta correcta
    gameContainer.innerHTML = `
      <img src="imagenes/exito.png" alt="¡Respuesta correcta!" style="max-width: 100%; height: auto; margin-top: 20px;" id="successImage" tabindex="7">
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
      <button onclick="retryQuestion()" style="margin-top: 20px;" id="retryButton" tabindex="8">Intentar de nuevo</button>
    `;

    // Focalizar primero la imagen y después el botón
    setTimeout(() => {
      document.getElementById("errorImage").focus();
    }, 100);
  }
}


