
document.getElementById('addParagraphButton').addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added by the button.';
    document.body.appendChild(newParagraph);
});
