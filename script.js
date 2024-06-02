// Function to change CSS variables dynamically
function setCustomProperty(property, value) {
    document.documentElement.style.setProperty(property, value);
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
        setCustomProperty('--main-bg-color', '#ffffff');
        setCustomProperty('--main-text-color', '#000000');
        setCustomProperty('--card-bg-color', '#f0f0f0');
        setCustomProperty('--highlight-color', '#ff9900');
        setCustomProperty('--text-highlight', '#ff6600');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        setCustomProperty('--main-bg-color', '#131313');
        setCustomProperty('--main-text-color', '#ffffff');
        setCustomProperty('--card-bg-color', '#232323');
        setCustomProperty('--highlight-color', '#1BBFE9');
        setCustomProperty('--text-highlight', 'rebeccapurple');
    }
}

// Add an event listener to the theme toggle button
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Theme';
    themeToggleButton.style.position = 'fixed';
    themeToggleButton.style.top = '10px';
    themeToggleButton.style.right = '10px';
    themeToggleButton.style.padding = '10px 20px';
    themeToggleButton.style.zIndex = '1000';
    themeToggleButton.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggleButton);
});
