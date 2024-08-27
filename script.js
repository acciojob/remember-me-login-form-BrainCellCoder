document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const existingBtn = document.getElementById('existing');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('checkbox');

    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingBtn.style.display = 'block';
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberMeCheckbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password')
        }

        alert(`Logged in as ${username}`);
    });

    existingBtn.addEventListener('click', function() {
        const storedUsername = localStorage.getItem('username');
        alert(`Logged in as ${storedUsername}`);
    });
});
