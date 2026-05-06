export function emailSent() {
    const btn = document.querySelector('.btn-submit');
    const form = document.querySelector('.contact-form')

    if (btn && form) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            // Validate fields
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email');
                return;
            }

            // Show success message
            alert(`Thank you ${name}! Your message has been sent successfully.`);
        });
    }
}