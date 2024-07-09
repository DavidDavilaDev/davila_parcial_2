document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'examen_parcial2';
    const correctPassword = 'Voyporel100';

    const messageElement = document.getElementById('message');

    if (username === correctUsername && password === correctPassword) {
        let countdown = 3;
        messageElement.textContent = `Login successful! Redirecting in ${countdown} seconds...`;
        messageElement.style.color = 'green';

        const countdownInterval = setInterval(function() {
            countdown -= 1;
            if (countdown > 0) {
                messageElement.textContent = `Login successful! Redirecting in ${countdown} seconds...`;
            } else {
                clearInterval(countdownInterval);
                window.location.href = 'https://davila.projectsutd.online/parcial1/project-management/';
            }
        }, 1000);
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.style.color = 'red';
    }
});
