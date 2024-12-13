// Script.js

// Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const message = document.getElementById("message").value.trim();
    
    let isValid = true;
    let errorMessage = "";

    if (!firstName) {
        errorMessage += "First Name is required.\n";
        isValid = false;
    }
    if (!lastName) {
        errorMessage += "Last Name is required.\n";
        isValid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errorMessage += "A valid email is required.\n";
        isValid = false;
    }
    if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
        errorMessage += "A valid phone number is required.\n";
        isValid = false;
    }
    if (!message) {
        errorMessage += "Message cannot be empty.\n";
        isValid = false;
    }

    if (isValid) {
        alert("Thank you! Your message has been submitted.");
        this.reset(); // Reset form
    } else {
        alert(errorMessage); // Show error message
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Icon Hover Feedback
document.querySelectorAll(".icons a img").forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.2)";
    });
    icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑ Top";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.fontSize = "16px";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.backgroundColor = "#1A1A1A";
backToTopButton.style.color = "#FFFFFF";
backToTopButton.style.border = "none";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
