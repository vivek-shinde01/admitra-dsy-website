 
// Toggle mobile navigation menu
const menuBar = document.querySelector('.menu_bar');
const navList = document.querySelector('.nav_list');

menuBar.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Close menu on nav link click
document.querySelectorAll('.nav_list a').forEach(link => {
  link.addEventListener('click', () => navList.classList.remove('active'));
});

// Animate sections on scroll (fade in)
const animatedSections = document.querySelectorAll(".section");
const fadeOptions = { threshold: 0.3 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}, fadeOptions);

animatedSections.forEach(section => observer.observe(section));

// Form submission using Web3Forms
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          alert("Form submitted successfully!");
          contactForm.reset();
        } else {
          alert("Error submitting form. Please try again.");
        }
      })
      .catch(() => alert("Something went wrong. Please try again."));
  });
}

// Highlight active nav link on scroll
const allSections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav_list a");

window.addEventListener("scroll", () => {
  let currentId = "";

  allSections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentId}`) {
      link.classList.add("active");
    }
  });
});
