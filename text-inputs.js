ocument.addEventListener('DOMContentLoaded', function() {
    // Get input elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Listen for changes in real-time
    nameInput.addEventListener('input', function() {
        console.log('Name changed to:', this.value);
    });
    
    emailInput.addEventListener('input', function() {
        console.log('Email changed to:', this.value);
    });
    
    messageInput.addEventListener('input', function() {
        console.log('Message changed to:', this.value);
    });
});