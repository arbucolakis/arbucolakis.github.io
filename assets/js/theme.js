document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-style');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    let currentTheme = 'light';

    themeToggle.addEventListener('click', () => {
        if (currentTheme === 'light') {
            themeStylesheet.href = 'dark-theme.css';
            currentTheme = 'dark';
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        } else {
            themeStylesheet.href = 'light-theme.css';
            currentTheme = 'light';
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }
    });
});