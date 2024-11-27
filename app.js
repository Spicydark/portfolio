 
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }
 
 // Select all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Options for the observer
const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the section is visible
};

// Callback function to execute when sections are observed
const callback = (entries) => {
    entries.forEach(entry => {
        const id = entry.target.id;
        const navLink = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
            // Add active class to the corresponding nav link
            navLink.classList.add('active');
        } else {
            // Remove active class from the nav link
            navLink.classList.remove('active');
        }
    });
};

window.onscroll = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.remove('active');
}

// Create an instance of IntersectionObserver
const observer = new IntersectionObserver(callback, options);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Create mailto link
    const mailtoLink = `mailto:your-sury.71772114314@gct.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
}