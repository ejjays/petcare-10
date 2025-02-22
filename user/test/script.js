document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');
    
    // Create link element for the dark theme stylesheet
    const darkThemeStyles = document.createElement('link');
    darkThemeStyles.rel = 'stylesheet';
    darkThemeStyles.href = 'test/styles.css';
    darkThemeStyles.id = 'theme-styles';

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Only load the stylesheet if dark theme was previously saved
    if (savedTheme === 'dark') {
        document.head.appendChild(darkThemeStyles);
    }

    updateThemeButton(savedTheme);

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Add or remove stylesheet based on theme
        if (newTheme === 'dark') {
            document.head.appendChild(darkThemeStyles);
        } else {
            const existingStylesheet = document.getElementById('theme-styles');
            if (existingStylesheet) {
                existingStylesheet.remove();
            }
        }
        
        updateThemeButton(newTheme);
    });

    function updateThemeButton(theme) {
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark Mode';
        }
    }
});