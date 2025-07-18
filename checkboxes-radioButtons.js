document.addEventListener('DOMContentLoaded', function() {
    // Handle checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log(`${this.id} is ${this.checked ? 'checked' : 'unchecked'}`);
        });
    });
    
    // Handle radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                console.log(`Selected: ${this.value}`);
            }
        });
    });
});