let yesbtn = document.querySelector(".yesbtn");
let nobtn = document.querySelector(".nobtn");
let t = document.querySelector(".t");

// Telegram Bot credentials
const TELEGRAM_BOT_TOKEN = "8335838796:AAHnE-KQbmJcZOo_mKgM4XxQPdIMUKihtH0";
const TELEGRAM_CHAT_ID = "8335838796";

// Function to send message to Telegram
async function sendToTelegram(message) {
    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const payload = {
            chat_id: TELEGRAM_CHAT_ID,
            text: message
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        console.log("Telegram message sent:", response.ok);
    } catch (error) {
        console.error("Error sending to Telegram:", error);
    }
}

// No button behavior (চালানো আগের মতো)
nobtn.addEventListener('click', (e) => {
    sendToTelegram("❌ Someone clicked No");

    const button = e.target;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const randomX = Math.random() * (screenWidth - button.offsetWidth);
    const randomY = Math.random() * (screenHeight - button.offsetHeight);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

// Yes button behavior (চালানো আগের মতো)
yesbtn.addEventListener('click', (e) => {
    sendToTelegram("✅ Someone clicked Yes! 💖");

    // আগের UI behavior ঠিক রাখা
    t.style.visibility = "visible";
    nobtn.style.visibility = "hidden";
});
