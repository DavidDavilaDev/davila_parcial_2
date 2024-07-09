document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'examen_parcial2';
    const correctPassword = 'Voyporel100';

    if (username === correctUsername && password === correctPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: 'Redirecting in 3 seconds...',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
        }).then(() => {
            window.location.href = 'https://davila.projectsutd.online/parcial1/project-management/';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username or password!',
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
        });
    }
});
