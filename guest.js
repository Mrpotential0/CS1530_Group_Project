'use strict';

function saveQuestion(event) {
    event.preventDefault();

    const selectedLanguages = document.querySelector('input[name="languageSelection"]:checked');
    const selectedLevel = document.querySelector('input[name="programmerLevel"]:checked');
    console.log(selectedLanguages);


    if (!selectedLanguages || !selectedLevel) {
        alert("Please select language(s) and programming level before submitting.");
        return;  // Exit if no question is selected
    }

    let guestData = {};
    let languages = [];

    alert("Guest data saved!");
}