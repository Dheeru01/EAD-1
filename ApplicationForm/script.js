document.getElementById('application-form').addEventListener('submit', function(event) {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const position = document.getElementById('position').value.trim();
    const dob = document.getElementById('dob').value;

    if (!fullName || !email || !phone || !address || !position || !dob) {
        alert('Please fill in all fields.');
        event.preventDefault();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
        return;
    }
});
