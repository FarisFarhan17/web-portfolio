const form = document.getElementById("contactForm");
const name = document.getElementById("name"); 
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.textContent = ""); 

    let isValid = true;

    if (name.value.trim() === "") {
        document.getElementById("name_error").textContent = "NAME REQUIRED!";
        isValid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("email_error").textContent = "EMAIL REQUIRED!";
        isValid = false;
    } else if (!email_check.test(email.value.trim())) {
        document.getElementById("email_error").textContent = "EMAIL NOT VALID!";
        isValid = false;
    }

    if (phone.value.trim() === "") {
        document.getElementById("phone_error").textContent = "PHONE NUMBER REQUIRED!";
        isValid = false;
    } else if (!phone_check.test(phone.value.trim())) {
        document.getElementById("phone_error").textContent = "PHONE NUMBER NOT VALID (must start with '+')";
        isValid = false;
    }

    if (message.value.trim() === "") {
        document.getElementById("message_error").textContent = "MESSAGE REQUIRED!";
        isValid = false;
    }

    if (isValid) {
        sendtoWhatsapp();
        form.reset();
    }
});

function sendtoWhatsapp() {
    let name_wa = encodeURIComponent(name.value);
    let email_wa = encodeURIComponent(email.value);
    let phone_wa = encodeURIComponent(phone.value);
    let message_wa = encodeURIComponent(message.value);

    const url = `https://wa.me/?text=Name:%20${name_wa}%0AEmail:%20${email_wa}%0APhone:%20${phone_wa}%0AMessage:%20${message_wa}`;
    
    window.open(url, '_blank').focus();
}

const email_check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phone_check = /^\+\d{10,15}$/;
