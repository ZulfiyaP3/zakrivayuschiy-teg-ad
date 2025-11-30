// Модальное окно
const saveButton = document.getElementById('saveButton');
const dialog = document.getElementById('dialog');
const dialogButton = document.getElementById('dialogButton');

saveButton.addEventListener('click', () => {
    dialog.showModal();
});

dialogButton.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
});

// Кнопки Like
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const heartIcon = this.querySelector('.like-icon');
        const buttonText = this.querySelector('.button__text') || this.querySelector('.like-button__text');
        
        if (heartIcon) {
            heartIcon.classList.toggle('is-liked');
            
            // Меняем текст кнопки сразу
            if (buttonText) {
                if (heartIcon.classList.contains('is-liked')) {
                    buttonText.textContent = 'Unlike';
                } else {
                    buttonText.textContent = 'Like';
                }
            }
        }
    });
});

