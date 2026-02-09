

    document.addEventListener("DOMContentLoaded", () => {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const card = document.querySelector(".card");

    // Safety check
    if (!noBtn || !yesBtn || !card) {
        console.error("One or more elements not found!");
        return;
    }

    // Messages for NO button
    const messages = [
        "Please no 😢",
        "Don't do this to me 💔",
        "Are you sure? 🥺",
        "Think again 😭",
        "This hurts 💘"
    ];

    let index = 0;

    // 🏃 NO button shy behavior
    function moveNoButton() {
        const isMobile = window.innerWidth < 480;

        const maxX = isMobile ? 60 : 120;
        const maxY = isMobile ? 40 : 80;

        const x = Math.random() * maxX * 2 - maxX;
        const y = Math.random() * maxY * 2 - maxY;

        noBtn.style.transform = `translate(${x}px, ${y}px)`;

        noBtn.textContent = messages[index];
        index = (index + 1) % messages.length;
    }

    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("touchstart", moveNoButton);

    // 💖 YES button click
    yesBtn.addEventListener("click", () => {

        confetti({
            particleCount: 200,
            spread: 80,
            origin: { y: 0.6 }
        });
        let countdown = 5;

        card.innerHTML = `
            <h1>💖 YAY!!! 💖</h1>
            <p style="margin: 15px 0;">Best decision ever 😘</p>

            <img 
                src="assets/CuteHug.gif"
                alt="Cute Hug"
                class="gif fade-in"
            />

            <p id= "countdownText">Redirecting to WhatsApp… 💬 in ${countdown}</p>
        `;

       const interval = setInterval(() => {
        countdown--;

        const text = document.getElementById("countdownText");
        if (text) {
            text.textContent = `Redirecting to WhatsApp in ${countdown}...`;
        }

        if (countdown === 0) {
            clearInterval(interval);

            const message = encodeURIComponent("I said YES ❤️🥰");
            const phoneNumber = "917758911933";

            window.location.href =
                `https://wa.me/${phoneNumber}?text=${message}`;
        }
    }, 1000);
});

    // 💖 Floating hearts
    setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}, 500);

});