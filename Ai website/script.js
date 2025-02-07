document.getElementById('toggle-signup').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('title').textContent = "Sign Up";
});

document.getElementById('toggle-login').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('title').textContent = "Login";
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    let nameRegex = /^[a-zA-Z ]+$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/;

    if (!nameRegex.test(name)) {
        alert("Name must contain only letters.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters and contain letters and numbers.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Sign-up successful!");
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hide the login form
    document.getElementById('login-form').classList.add('hidden');

    // Show the loading screen after a tiny delay to allow repainting
    setTimeout(() => {
        document.getElementById('loading-screen').classList.remove('hidden');
        
        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000);
    }, 100); // Tiny delay to force DOM repaint
});
