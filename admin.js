'use strict';

function loadSavedData() {
    const guestSessionData = localStorage.getItem('guestData');       // Get the data from the session storage

    // Check if any data is found
    if (guestSessionData) {
        const guestData = JSON.parse(guestSessionData);       // Parse the stored Data in "guestData"
        const displaySection = document.getElementById('savedDataSection');
        
        // This will be sent to the front end (style this in html more or less)
        const content = `
            <h3>Selected Language: ${guestData.language}</h3>
            <h3>Programming Level: ${guestData.level}</h3>
        `;
        displaySection.innerHTML = content;
    } else {
        // If no data is found, tell the admin about it
        const displaySection = document.getElementById('savedDataSection');
        displaySection.innerHTML = "<p>The Guest has not submitted any data as of yet.</p>";
    }
}
window.onload = loadSavedData;  // Loads the data every time the page loads
