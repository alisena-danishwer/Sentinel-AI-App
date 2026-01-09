// --- MOBILE MENU LOGIC ---
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item');

// Toggle Menu on Hamburger Click
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close Menu when a Link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


// --- SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));


// --- API PREDICTION LOGIC ---
async function getPrediction() {
    const text = document.getElementById("tweetInput").value;
    const statusText = document.getElementById("statusText");
    const resultBox = document.getElementById("resultBox");
    const predictionText = document.getElementById("predictionText");
    const emojiIcon = document.getElementById("emojiIcon");
    const loaderFill = document.querySelector(".loader-fill");
    
    if (!text) return alert("Please enter some text first.");

    statusText.innerText = "Analyzing...";
    resultBox.classList.add("hidden");
    loaderFill.style.width = "0%";

    try {
        const response = await fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text })
        });
        const data = await response.json();

        resultBox.classList.remove("hidden");
        setTimeout(() => { loaderFill.style.width = "100%"; }, 100);
        statusText.innerText = "Complete";

        const sent = data.result;
        predictionText.innerText = sent.toUpperCase();
        
        resultBox.className = "result-container"; // Reset
        
        if (sent === "Positive") {
            emojiIcon.innerHTML = "😊";
            resultBox.style.borderLeft = "5px solid #4CAF50";
            predictionText.style.color = "#155724";
        } else if (sent === "Negative") {
            emojiIcon.innerHTML = "😠";
            resultBox.style.borderLeft = "5px solid #e63946";
            predictionText.style.color = "#721c24";
        } else {
            emojiIcon.innerHTML = "😐";
            resultBox.style.borderLeft = "5px solid #fca311";
            predictionText.style.color = "#856404";
        }

    } catch (error) {
        statusText.innerText = "Connection Error";
    }
}