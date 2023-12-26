document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-btn');

    // Проверяем, было ли всплывающее окно уже показано
    if (!localStorage.getItem('popupShown')) {
        popup.style.display = 'block';
        content.classList.add('blur');
        localStorage.setItem('popupShown', 'true');
    }

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
        content.classList.remove('blur');
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            content.classList.remove('blur');
        }
    });
});