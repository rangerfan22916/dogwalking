// Show popup on book button
function showAlert() {
  alert("Thanks for your interest! We'll get back to you shortly.");
}

// Handle contact form submission
function handleSubmit(event) {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]')?.value || "Friend";
  alert(`Thanks, ${name}! Your message has been sent.`);
  document.querySelector("form").reset();
}

// Scroll animation (optional enhancement)
window.addEventListener("scroll", () => {
  document.querySelectorAll(".feature-box").forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.style.transform = "translateY(0)";
      box.style.opacity = 1;
    }
  });
});
