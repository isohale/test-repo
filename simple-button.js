// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons
    const buttons = document.querySelectorAll('button');
    
    // Add click event to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
            alert('You clicked: ' + this.textContent);
        });
    });
});