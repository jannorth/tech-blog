const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username.value, password.value }),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to signup.');
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);