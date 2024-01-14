function addCard() {
    const cardContainer = document.getElementById('cardContainer');
    const newCard = cardContainer.firstElementChild.cloneNode(true);
    cardContainer.appendChild(newCard);

    updateOptions();
}

function deleteCard(button) {
    const cardContainer = document.getElementById('cardContainer');
    if (cardContainer.childElementCount > 1) {
        cardContainer.removeChild(button.parentNode);
    }

    updateOptions();
}

function updateOptions() {
    const selects = document.querySelectorAll('.dates-select');
    const selectedDates = new Set();
    
    selects.forEach(select => {
        const selectedOption = select.value;
        if (selectedOption) {
            selectedDates.add(selectedOption);
        }
    });

    selects.forEach(select => {
        const options = select.querySelectorAll('option');
        options.forEach(option => {
            option.hidden = selectedDates.has(option.value) && option.value !== select.value;
        });
    });
}