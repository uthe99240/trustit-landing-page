// Mobile Menu
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name required";
    valid = false;
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Valid email required";
    valid = false;
  }

  if (message.value.trim() === "") {
    document.getElementById("messageError").textContent = "Message required";
    valid = false;
  }

  if (valid) {
    alert("Message sent!");
    this.reset();
  }
});

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});