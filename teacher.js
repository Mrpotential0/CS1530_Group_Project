'use strict';

function saveQuestion(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    
    // Get the selected radio button value
    const selectedQuestion = document.querySelector('input[name="question"]:checked');

    if (!selectedQuestion) {
        alert("Please select a question before submitting.");
        return;  // Exit if no question is selected
    }

    let questionData = {};
    if (selectedQuestion.value === 'easy') {
        questionData = {
            question: "What is the 64 bit way to express an integer number (named x) in Java that contains integer value 12? (code in Java)",
            answer: "long x = 12"
        };
    } else if (selectedQuestion.value === 'moderate') {
        questionData = {
            question: "How do you initialize an integer array (named array) of size 20 with no elements in it? (code in Java)",
            answer: "int[] array = new int[20];"
        };
    } else if (selectedQuestion.value === 'hard') {
        questionData = {
            question: "In string comparison. If we have String x and we want to see if it is equal to String y, what built in method should we use to compare them? (code in Java)",
            answer: "x.equals(y)"
        };
    }

    // Convert the object to JSON string
    const jsonData = JSON.stringify(questionData);

    // Save it to localStorage
    localStorage.setItem('teacherData', jsonData);

    alert("Teacher data saved!");
}


function loadData() {
    const objective = localStorage.getItem('teacherData');  // Retrieve the saved data from localStorage

    if (objective) {
        const parsedData = JSON.parse(objective);  // Parse the JSON string back into an object
        console.log(parsedData);  // Log the parsed data to the console
        document.getElementById('teacherInfo').innerText = 
            `Question: ${parsedData.question}\nAnswer: ${parsedData.answer}`;
    } else {
        document.getElementById('teacherInfo').innerText = "No question data found.";
    }
}

function clearData() {
    localStorage.clear();
}

document.addEventListener('DOMContentLoaded', loadData);  // Wait for DOM to be ready