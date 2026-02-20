function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phone = "5518996622714";

    const text = 
        `Olá, meu nome é ${name}%0A` +
        `Email: ${email}%0A` +
        `Mensagem: ${message}`;

    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
});