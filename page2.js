
//add row button code
//define constants
const addRowButton = document.getElementById('add-row-button');
const deleteRowsButton = document.getElementById('delete-rows-button');
const studentTable = document.getElementById('student-table');
let rowCount = studentTable.rows.length - 1; // Initial row count
//add up to 25 rows
addRowButton.addEventListener('click', () => {
    if (rowCount < 25) {
        const newRow = studentTable.insertRow(rowCount + 1);
//define each cell row 
        const nameCell = newRow.insertCell(0);
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'student-name';
        nameCell.appendChild(nameInput);

        const emailCell = newRow.insertCell(1);
        const emailInput = document.createElement('input');
        emailInput.type = 'text';
        emailInput.className = 'student-email';
        emailCell.appendChild(emailInput);

        const gradeCell = newRow.insertCell(2);
        const gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.className = 'grade';
        gradeInput.min = 0;
        gradeInput.max = 100;
        gradeCell.appendChild(gradeInput);

        const snackCell = newRow.insertCell(3);
        const snackInput = document.createElement('input');
        snackInput.type = 'text';
        snackInput.className = 'snack impression-input';
        snackCell.appendChild(snackInput);

        const impressionCell = newRow.insertCell(4);
        const impressionInput = document.createElement('input');
        impressionInput.type = 'text';
        impressionInput.className = 'emoji impression-input';
        impressionCell.appendChild(impressionInput);

        const impButton = document.createElement('button');
        impButton.className = 'imp';
        impButton.textContent = '+';
        impButton.addEventListener('click', () => {
            handleAddButtonClick(impButton);
        });
        impressionCell.appendChild(impButton);

        const sendEmailCell = newRow.insertCell(5);
        const sendEmailLink = document.createElement('a');
        sendEmailLink.href = 'mailto:';
        sendEmailLink.textContent = 'Send Email';
        sendEmailCell.appendChild(sendEmailLink);

        // Update row count to show the new row count after adding the row
        rowCount++;

        // Scroll to the bottom of the table to ensure newly added rows are visible
        studentTable.scrollTop = studentTable.scrollHeight;
    }
});
//delete row button functionality
deleteRowsButton.addEventListener('click', () => {
    if (rowCount > 2) { // Change the number to the minimum number of rows keep them 
        studentTable.deleteRow(rowCount);
        rowCount--;
    }
});
//show emoji when the impression button is clicked part
studentTable.addEventListener('click', (event) => {
    if (event.target.classList.contains('imp')) {
        handleAddButtonClick(event.target);
    }
});

function handleAddButtonClick(button) {
    const emojiPopup = document.createElement('div');
    emojiPopup.className = 'emoji-popup';
//define the 3 constant emoji and choose 1 to display in the input field
    const emojiButton1 = document.createElement('button');
    emojiButton1.textContent = '😀';
    emojiButton1.addEventListener('click', () => {
        handleEmojiSelection(button, '😀');
        emojiPopup.style.display = 'none';
    });
    emojiPopup.appendChild(emojiButton1);

    const emojiButton2 = document.createElement('button');
    emojiButton2.textContent = '😊';
    emojiButton2.addEventListener('click', () => {
        handleEmojiSelection(button, '😊');
        emojiPopup.style.display = 'none';
    });
    emojiPopup.appendChild(emojiButton2);

    const emojiButton3 = document.createElement('button');
    emojiButton3.textContent = '🙂';
    emojiButton3.addEventListener('click', () => {
        handleEmojiSelection(button, '🙂');
        emojiPopup.style.display = 'none';
    });
    emojiPopup.appendChild(emojiButton3);

    document.body.appendChild(emojiPopup);

    // Position the emoji popup next to the button
    const buttonRect = button.getBoundingClientRect();
    emojiPopup.style.top = buttonRect.bottom + 'px';
    emojiPopup.style.left = buttonRect.left + 'px';

    // Show the emoji popup window
    emojiPopup.style.display = 'block';
}

function handleEmojiSelection(button, emoji) {
    const emojiInput = button.previousElementSibling;
    emojiInput.value = emoji;
}