'use strict';

let points = 0; // initialize points

// load question immediately
document.addEventListener('DOMContentLoaded', function () {
    loadQuestion();
});

// load from localstorage
function loadQuestion() {
    const savedData = localStorage.getItem('teacherData');

    if (savedData) {
        const questionData = JSON.parse(savedData); // parse json data
        const questionTextElement = document.getElementById('question-text');
        questionTextElement.textContent = questionData.question;
    } else {
        const questionTextElement = document.getElementById('question-text');
        questionTextElement.textContent = "No coding assignment challenges assigned yet! Sit back and relax!";
    }
}

// on submit
document.getElementById('submit-btn').addEventListener('click', function () {
    const answerBox = document.getElementById('answer-box').value.trim(); // students input
    const savedData = localStorage.getItem('teacherData');

    if (!savedData) {
        showFeedback("No question has been assigned yet.", "info");
        return;
    }

    const questionData = JSON.parse(savedData); // parse saved data
    const correctAnswer = questionData.answer; // get correct answer from saved data

    if (answerBox === correctAnswer) {
        points += 10;
        updatePoints();
        showFeedback("CORRECT!", "success");
    } else {
        showFeedback("INCORRECT!", "error");
    }
});

// update points
function updatePoints() {
    const pointsElement = document.getElementById('points');
    pointsElement.textContent = points;
}

// show inccorect or correct message under answer box
function showFeedback(message, type) {
    const feedbackElement = document.getElementById('feedback-message');
    feedbackElement.textContent = message; // set message

    // apply on type of message
    if (type === "success") {
        feedbackElement.style.color = "var(--correct-color)";
    } else if (type === "error") {
        feedbackElement.style.color = "var(--incorrect-color)";
    } else {
        feedbackElement.style.color = "var(--highlight-color)";
    }
}
