document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MATRIX EFFECT
    ========================== */

    const canvas = document.getElementById("matrixCanvas");

    if (canvas) {
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const letters = "01";
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00f0ff";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        setInterval(draw, 33);
    }

    /* =========================
       FORM WHATSAPP
    ========================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const phoneNumber = "5518996622714";

            const whatsappMessage =
                `Olá, meu nome é ${name}%0A` +
                `Email: ${email}%0A%0A` +
                `Mensagem:%0A${message}`;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

            window.open(whatsappURL, "_blank");
        });
    }
});

/* =========================
   SCROLL TO TOP
========================== */

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}