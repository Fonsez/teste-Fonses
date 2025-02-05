document.addEventListener("DOMContentLoaded", () => {
  let countdownValue = 10;
  let countdownInterval;
  let isPaused = false;
  let isStopped = false;

  const displayEl = document.getElementById("countdownDisplay");
  const pauseBtn = document.getElementById("pauseBtn");
  const stopBtn = document.getElementById("stopBtn");
  const resetBtn = document.getElementById("resetBtn");

  function formatTime(value) {
    // Exibe MM:SS
    let min = Math.floor(value / 60);
    let sec = value % 60;
    return String(min).padStart(2,"0") + ":" + String(sec).padStart(2,"0");
  }

  function updateDisplay() {
    displayEl.textContent = formatTime(countdownValue);
  }

  function startCountdown() {
    countdownInterval = setInterval(() => {
      if (!isPaused && !isStopped) {
        if (countdownValue > 0) {
          countdownValue--;
          updateDisplay();
        } else {
          displayEl.textContent = "Tempo Esgotado!";
          clearInterval(countdownInterval);
        }
      }
    }, 1000);
  }

  // Botão Pause/Resume
  pauseBtn.addEventListener("click", () => {
    // Toggle no estado isPaused
    isPaused = !isPaused;
    // Muda o texto do botão para resume se estiver pausado se n pause
    pauseBtn.textContent = isPaused ? "Resume" : "Pause";
  });

   // Botão Stop -> Parado / Play
  stopBtn.addEventListener("click", () => {
    if (!isStopped) {
      // Se n estiver parado, para
      clearInterval(countdownInterval);
      displayEl.textContent = "Parado!";
      isStopped = true;
      // Muda o texto do botão para play
      stopBtn.textContent = "Play";
    } else {
      // Se já estava parado, clique dnv para virar play
      isStopped = false;
      stopBtn.textContent = "Stop";
      startCountdown();
    }
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    countdownValue = 10;
      // Garante que não está pausado nem parado
    isPaused = false;
    isStopped = false;
      // Retorna os textos de pause e stop
    pauseBtn.textContent = "Pause";
    stopBtn.textContent = "Stop";
      // Atualiza a tela e inicia de novo
    updateDisplay();
    startCountdown();
  });

  // Inicio: exibe 10s e inicia o intervalo
  updateDisplay();
  startCountdown();
});



pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  const icon = pauseBtn.querySelector("i");
  if (isPaused) {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  } else {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  }
});
