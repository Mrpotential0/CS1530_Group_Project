'use strict';

function saveQuestion(event) {
    event.preventDefault();

    const selectedLanguage = document.querySelector('input[name="languageSelection"]:checked');
    const selectedLevel = document.querySelector('input[name="programmerLevel"]:checked');
    console.log(selectedLanguage.value);


    if (!selectedLanguage || !selectedLevel) {
        alert("Please select language(s) and programming level before submitting.");
        return;  // Exit if no question is selected
    }

    let guestData = {
        language: selectedLanguage.value,
        level: selectedLevel.value,
    };

    const jsonData = JSON.stringify(guestData);

    localStorage.setItem('guestData', jsonData);

    alert("Guest data saved!");
}