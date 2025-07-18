document.addEventListener('DOMContentLoaded', function() {
    // Get all sliders
    const sliders = document.querySelectorAll('input[type="range"]');
    
    sliders.forEach(slider => {
        // Get the corresponding value display
        const valueDisplay = document.getElementById(slider.id + '-value');
        
        // Update value display when slider changes
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value;
            console.log(`${this.id} changed to: ${this.value}`);
        });
    });
});