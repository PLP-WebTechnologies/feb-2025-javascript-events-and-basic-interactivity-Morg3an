document.addEventListener("DOMContentLoaded", () => {
    // Button click
    const clickButton = document.getElementById("myButton");
    if (clickButton) {
        clickButton.addEventListener("click", () => {
            alert("Button Clicked!");
        });
    }

    // Hover effect
    const hoverDiv = document.getElementById("hoverDiv");
    if (hoverDiv) {
        hoverDiv.addEventListener("mouseover", () => {
            hoverDiv.style.backgroundColor = "#E0E0E0";
        });
        hoverDiv.addEventListener("mouseout", () => {
            hoverDiv.style.backgroundColor = "#f4f7fc";
        });

        // Double-click or long press detection (Bonus)
        hoverDiv.addEventListener("dblclick", () => {
            alert("Double-click detected!");
        });

        let pressTimer;
        hoverDiv.addEventListener("mousedown", () => {
            pressTimer = setTimeout(() => {
                alert("Long press detected!");
            }, 2000);
        });
        hoverDiv.addEventListener("mouseup", () => {
            clearTimeout(pressTimer);
        });
    }

    // Keypress detection
    document.addEventListener("keypress", (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // Interactive Elements: Button change text and color
    const changeTextButton = document.getElementById("changeTextButton");
    if (changeTextButton) {
        changeTextButton.addEventListener("click", () => {
            changeTextButton.textContent = "You clicked me!";
            changeTextButton.style.backgroundColor = "#28a745";
        });
    }

    // Image Gallery
    const galleryImages = document.querySelectorAll(".gallery-image");
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            alert(`You clicked on image: ${image.alt}`);
        });
    });

    // Tabs/Accordion
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetContent = document.getElementById(button.getAttribute("data-target"));
            tabContents.forEach(content => {
                content.style.display = "none";
            });
            if (targetContent) {
                targetContent.style.display = "block";
            }
        });
    });

    // Form Validation
    const form = document.getElementById("myForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordFeedback = document.getElementById("passwordFeedback");

    // Real-time feedback for password validation
    passwordInput.addEventListener("input", () => {
        if (passwordInput.value.length < 8) {
            passwordFeedback.textContent = "Password must be at least 8 characters.";
        } else {
            passwordFeedback.textContent = "";
        }
    });

    // Form submission handling with validation
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Validate email format
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if password is valid
        if (passwordInput.value.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        alert("Form submitted successfully!");
    });
});

// Tab function to handle tab switching
function openTab(tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.style.display = "none";  // Hide all tabs
    });

    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = "block";  // Show selected tab
    }
}