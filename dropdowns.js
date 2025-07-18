document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');
    
    countrySelect.addEventListener('change', function() {
        console.log('Selected country:', this.value);
        if (this.value) {
            alert(`You selected: ${this.options[this.selectedIndex].text}`);
        }
    });
});