function updateOutput() {
    // Get all current values
    const name = document.getElementById('name').value || '';
    const email = document.getElementById('email').value || '';
    const volume = document.getElementById('volume').value;
    const country = document.getElementById('country').value || '';
    
    // Get checkbox states
    const option1 = document.getElementById('option1').checked;
    const option2 = document.getElementById('option2').checked;
    
    // Get radio selection
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    const choice = selectedChoice ? selectedChoice.value : '';
    
    // Check if any values have been entered
    const hasValues = name || email || volume !== '50' || country || option1 || option2 || choice;
    
    // Update the display
    const display = document.getElementById('values-display');
    
    if (!hasValues) {
        // Show initial message if no values have been entered
        display.innerHTML = '<p>Interact with the elements above to see their values here.</p>';
    } else {
        // Show current values
        display.innerHTML = `
            <p><strong>Name:</strong> ${name || 'Not entered'}</p>
            <p><strong>Email:</strong> ${email || 'Not entered'}</p>
            <p><strong>Volume:</strong> ${volume}</p>
            <p><strong>Country:</strong> ${country || 'Not selected'}</p>
            <p><strong>Option 1:</strong> ${option1}</p>
            <p><strong>Option 2:</strong> ${option2}</p>
            <p><strong>Choice:</strong> ${choice || 'None selected'}</p>
        `;
    }
}

// Add event listeners to all interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('input, select, textarea');
    
    interactiveElements.forEach(element => {
        element.addEventListener('input', updateOutput);
        element.addEventListener('change', updateOutput);
    });
    
    // Initialize the display
    updateOutput();
});
