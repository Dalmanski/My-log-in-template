// Track which form is being shown
let isLoginVisible = true;

// Toggle between Sign Up and Login forms
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');
    const toggleLink = document.getElementById('toggle-link');

    if (isLoginVisible) {
        // Switch to sign-up form
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        formTitle.textContent = 'Sign Up';
        toggleLink.innerHTML = `Already have an account? <a href="#" onclick="toggleForm()">Log In</a>`;
    } else {
        // Switch to login form
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Log In';
        toggleLink.innerHTML = `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`;
    }

    isLoginVisible = !isLoginVisible;
}

// Function to handle sign-up
function handleSignUp(event) {
    event.preventDefault();

    // Get the user input
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Retrieve existing users from LocalStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists in the users array
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert('This email is already registered.');
        return;
    }

    // Add the new user (email and password) to the users array
    const newUser = { email: email, password: password };
    users.push(newUser);

    // Store the updated users array back to LocalStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signed up successfully!');
    document.getElementById('signup-form').reset();  // Clear form after signup
}

// Function to handle login
function handleLogin(event) {
    event.preventDefault();

    // Get the user input
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve the users from LocalStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the matching email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Logged in successfully!');
        document.getElementById('login-form').reset();  // Clear form after login
    } else {
        alert('Invalid email or password.');
    }
}

// Developer Mode Toggle Logic
let developerModeEnabled = false;

// Function to toggle developer mode visibility
function toggleDeveloperMode() {
    const devSection = document.getElementById('developer-mode-section');
    const toggleBtn = document.getElementById('dev-mode-toggle-btn');
    
    developerModeEnabled = !developerModeEnabled;
    
    if (developerModeEnabled) {
        devSection.style.display = 'block';
        toggleBtn.style.opacity = 1; // Make sure button is visible
        showLocalStorageData(); // Show localStorage data when developer mode is enabled
    } else {
        devSection.style.display = 'none';
    }
}

// Function to display localStorage Gmail data
function showLocalStorageData() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Format the email list with line breaks
    const emails = users.map(user => user.email).join('<br>');
    
    // Populate the developer mode section with the email data
    const emailList = document.getElementById('email-list');
    emailList.innerHTML = emails ? 'Stored emails:<br>' + emails : 'No stored emails found.';
}

// Function to clear LocalStorage data
function clearLocalStorageData() {
    if (confirm('Are you sure you want to clear all user data?')) {
        localStorage.removeItem('users');
        alert('All user data cleared.');
        showLocalStorageData(); // Refresh email list after clearing
    }
}
