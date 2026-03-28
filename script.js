const scoreText = document.getElementById("scoreText");
const progressText = document.getElementById("progressText");
const modeBadge = document.getElementById("modeBadge");
const promptText = document.getElementById("promptText");
const videoPlayer = document.getElementById("videoPlayer");
const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const answerForm = document.getElementById("answerForm");
const textAnswerWrap = document.getElementById("textAnswerWrap");
const textAnswer = document.getElementById("textAnswer");
const mcqWrap = document.getElementById("mcqWrap");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const feedback = document.getElementById("feedback");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const finalScoreText = document.getElementById("finalScoreText");
const retryBtn = document.getElementById("retryBtn");

let questions = [];
let currentIndex = 0;
let score = 0;
let selectedOption = null;
let answered = false;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9 ]/g, "");
}

function initQuiz() {
  questions = shuffle(QUESTIONS)
    .slice(0, 10)
    .map((question) => {
      if (question.type === "multiple") {
        return { ...question, options: shuffle(question.options) };
      }
      return { ...question };
    });

  currentIndex = 0;
  score = 0;
  selectedOption = null;
  answered = false;
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  renderQuestion();
}

function updateHeader() {
  scoreText.textContent = `${score} / ${currentIndex} correct so far`;
  progressText.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
}

function renderQuestion() {
  const question = questions[currentIndex];
  answered = false;
  selectedOption = null;
  feedback.textContent = "";
  feedback.className = "feedback";
  submitBtn.disabled = false;
  nextBtn.classList.add("hidden");
  textAnswer.value = "";

  updateHeader();
  modeBadge.textContent = question.mode;
  promptText.textContent = question.prompt;
  videoPlayer.pause();
  audioPlayer.pause();

  videoPlayer.classList.add("hidden");
  audioPlayer.classList.add("hidden");

  videoPlayer.removeAttribute("src");
  audioPlayer.removeAttribute("src");

  if (question.mode === "audio only") {
    audioPlayer.src = question.src;
    audioPlayer.load();
    audioPlayer.classList.remove("hidden");
  } else if (question.mode === "video only") {
    videoPlayer.src = question.src;
    videoPlayer.muted = true;
    videoPlayer.load();
    videoPlayer.classList.remove("hidden");
  } else if (question.mode === "both") {
    videoPlayer.src = question.src;
    videoPlayer.muted = false;
    videoPlayer.load();
    videoPlayer.classList.remove("hidden");
  }

  textAnswerWrap.classList.add("hidden");
  mcqWrap.classList.add("hidden");
  mcqWrap.innerHTML = "";

  if (question.type === "text") {
    textAnswerWrap.classList.remove("hidden");
  } else if (question.type === "multiple") {
    mcqWrap.classList.remove("hidden");
    question.options.forEach((option) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "option-btn";

  const iconHtml = option.icon
    ? (option.icon.startsWith("icons/") || option.icon.includes("/") || option.icon.endsWith(".png") || option.icon.endsWith(".jpg") || option.icon.endsWith(".jpeg") || option.icon.endsWith(".webp") || option.icon.endsWith(".svg"))
      ? `<img src="${option.icon}" alt="" class="option-icon">`
      : `<span class="option-emoji">${option.icon}</span>`
    : "";

  button.innerHTML = `
    ${iconHtml}
    <span class="option-label">${option.label}</span>
  `;

  button.addEventListener("click", () => {
    if (answered) return;
    selectedOption = option.label;
    document.querySelectorAll(".option-btn").forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });

  mcqWrap.appendChild(button);
});
  }
}

function getCorrectAnswerText(question) {
  if (question.type === "text") {
    return question.answers[0];
  }
  return question.answer;
}

function isCorrect(question) {
  if (question.type === "text") {
    const guess = normalize(textAnswer.value);
    return question.answers.some((answer) => normalize(answer) === guess);
  }
  return selectedOption === question.answer;
}

function submitAnswer(event) {
  event.preventDefault();
  if (answered) return;

  const question = questions[currentIndex];

  if (question.type === "text" && !textAnswer.value.trim()) {
    feedback.textContent = "Type an answer first.";
    feedback.className = "feedback wrong";
    return;
  }

  if (question.type === "multiple" && !selectedOption) {
    feedback.textContent = "Choose an option first.";
    feedback.className = "feedback wrong";
    return;
  }

  answered = true;
  const correct = isCorrect(question);

  if (correct) {
    score += 1;
    feedback.textContent = "Correct.";
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = `Incorrect. Correct answer: ${getCorrectAnswerText(question)}`;
    feedback.className = "feedback wrong";
  }

  submitBtn.disabled = true;
  nextBtn.classList.remove("hidden");
  scoreText.textContent = `${score} / ${currentIndex + 1} correct so far`;
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex >= questions.length) {
    showResults();
    return;
  }
  renderQuestion();
}

function showResults() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  const percentage = Math.round((score / questions.length) * 100);
  finalScoreText.textContent = `You got ${percentage}% correct (${score} out of ${questions.length}).`;
  scoreText.textContent = `${score} / ${questions.length} correct so far`;
  progressText.textContent = "Finished";
}

playBtn.addEventListener("click", () => {
  const question = questions[currentIndex];

  if (question.mode === "audio only") {
    audioPlayer.currentTime = 0;
    audioPlayer.play().catch(() => {
      feedback.textContent = "Your browser blocked playback. Tap play again.";
      feedback.className = "feedback wrong";
    });
  } else {
    videoPlayer.currentTime = 0;
    videoPlayer.play().catch(() => {
      feedback.textContent = "Your browser blocked playback. Tap play again.";
      feedback.className = "feedback wrong";
    });
  }
});

answerForm.addEventListener("submit", submitAnswer);
nextBtn.addEventListener("click", nextQuestion);
retryBtn.addEventListener("click", initQuiz);

initQuiz();