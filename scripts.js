// JavaScript to toggle between Login and Sign Up forms
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');
    const toggleLink = document.getElementById('toggle-link');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        formTitle.textContent = 'Login';
        toggleLink.innerHTML = "Don't have an account? <a href='#' onclick='toggleForm()'>Sign Up</a>";
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        formTitle.textContent = 'Sign Up';
        toggleLink.innerHTML = "Already have an account? <a href='#' onclick='toggleForm()'>Log In</a>";
    }
}
