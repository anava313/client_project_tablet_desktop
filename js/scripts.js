const toggleButton = document.getElementById('toggleButton');
const formContainer = document.getElementById('formContainer');

toggleButton.addEventListener('click', function() {
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';  
        toggleButton.textContent = 'Close Form'; 
    } else {
        formContainer.style.display = 'none';  
        toggleButton.textContent = 'Open Form'; 
    }
});