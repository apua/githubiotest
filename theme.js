const setTheme = theme => document.documentElement.setAttribute('data-bs-theme', theme);
const query = window.matchMedia('(prefers-color-scheme: dark)');
query.addEventListener('change', event => {
    event.matches ? setTheme('dark') : setTheme('light');
})
query.matches ? setTheme('dark') : setTheme('light');
