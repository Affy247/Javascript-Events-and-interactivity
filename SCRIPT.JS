
// Part 1: Event Handling

const msgBtn = document.getElementById('msgBtn');
const msg = document.getElementById('msg');

msgBtn.addEventListener('click', () => {
  msg.classList.toggle('hidden');
});


// Part 2: Interactive Elements
// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Counter Feature
const incBtn = document.getElementById('incBtn');
const countEl = document.getElementById('count');
let count = 0;

incBtn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
});

// Part 3: Form Validation
const form = document.getElementById('signupForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Validate Name
  const name = document.getElementById('name').value.trim();
  if (name.length < 3) {
    document.getElementById('nameError').textContent = "Name must be at least 3 characters";
    valid = false;
  } else {
    document.getElementById('nameError').textContent = "";
  }

  // Validate Email
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = "Please enter a valid email";
    valid = false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  // Validate Password
  const pass = document.getElementById('password').value;
  if (pass.length < 8) {
    document.getElementById('passError').textContent = "Password must be at least 8 characters";
    valid = false;
  } else {
    document.getElementById('passError').textContent = "";
  }

  
  if (valid) {
    alert("Form submitted successfully!");
    form.reset(); 
  }
});