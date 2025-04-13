let currentQuestion = 0;
let score = 0;
let playerName = "";

function startGame() {
  const nameInput = document.getElementById("player-name");
  if (nameInput.value.trim() === "") {
    alert("Por favor, escribe tu nombre.");
    return;
  }

  playerName = nameInput.value.trim();
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question").textContent = question.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  question.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("incorrect");
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("score").textContent = `${playerName}, tu puntaje es ${score}/${questions.length}`;
  saveScore(playerName, score);
}

function restartGame() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function goToStart() {
  document.getElementById("ranking").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
  document.getElementById("player-name").value = "";
  currentQuestion = 0;
  score = 0;
}

function showRanking() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("ranking").classList.remove("hidden");

  const scores = JSON.parse(localStorage.getItem("triviaScores")) || [];
  scores.sort((a, b) => b.score - a.score);
  const top10 = scores.slice(0, 10);

  const list = document.getElementById("ranking-list");
  list.innerHTML = "";
  top10.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${entry.name}: ${entry.score} pts`;
    list.appendChild(li);
  });
}
