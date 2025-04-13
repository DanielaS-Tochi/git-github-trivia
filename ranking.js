function saveScore(name, score) {
    const scores = JSON.parse(localStorage.getItem("triviaScores")) || [];
    scores.push({ name, score });
    localStorage.setItem("triviaScores", JSON.stringify(scores));
  }