let timeLeft = 45; // Tiempo en segundos
const timerElement = document.getElementById("timer");

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
  const feedback = document.getElementById("feedback");
  feedback.textContent = "Se agotó el tiempo. Intenta nuevamente.";
  feedback.style.color = "red";

  // Deshabilita los botones
  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach((button) => (button.disabled = true));
}

// Llama al temporizador al cargar la página
window.onload = startTimer;

// Función para comprobar la respuesta
function checkAnswer(answer) {
  const feedback = document.getElementById("feedback");
  const gameContainer = document.getElementById("fondodelJuego");

  if (answer === "correct") {
    gameContainer.innerHTML = `
      <img src="imagenes/exito.png" alt="¡Respuesta correcta!" style="max-width: 100%; height: auto; margin-top: 20px;">
      <button onclick="nextQuestion()" style="margin-top: 20px;">Siguiente</button>
    `;
  } else {
    feedback.textContent = "Incorrecto. Intenta de nuevo.";
    feedback.style.color = "red";
  }
}



