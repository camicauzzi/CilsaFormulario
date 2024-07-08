document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    if (validateEmail(email)) {
        document.getElementById("message").textContent = "Enviado!";
        document.getElementById("myForm").reset();
    } else {
        alert("Por favor, ingrese un email válido.");
    }
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById("style1").addEventListener("click", function() {
    document.getElementById("formContainer").className = "form-container style1";
});

document.getElementById("style2").addEventListener("click", function() {
    document.getElementById("formContainer").className = "form-container style2";
});
