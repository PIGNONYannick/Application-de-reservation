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

    checkFields();
}

function checkFields() {
    const selects = document.querySelectorAll('.dates-select');
    const inputs = document.querySelectorAll('input[type="number"]');
    let allFieldsFilled = true;
    const addButton = document.getElementById('add');
    const bookButton = document.getElementById('book');
    const allOptions = document.querySelectorAll('.dates-select option:not([disabled])');
    const selectedOptions = document.querySelectorAll('.dates-select option[hidden]');

    selects.forEach(select => {
        if (!select.value) {
            allFieldsFilled = false;
        }
    });

    inputs.forEach(input => {
        if (!input.value) {
            allFieldsFilled = false;
        }
    });

    addButton.disabled = !allFieldsFilled || allOptions.length === selectedOptions.length;
    bookButton.disabled = !allFieldsFilled;
}

document.addEventListener('change', checkFields);