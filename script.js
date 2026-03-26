const paragraphs = [
    "JavaScript is a powerful programming language used for web development.",
    "Practice daily to improve your coding skills and typing speed.",
    "Consistency is the key to success in any field of life.",
    "Frontend development includes HTML CSS and JavaScript."
];

let timer = 60;
let interval;
let started = false;

function loadParagraph() {
    const para = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    document.getElementById("paragraph").innerText = para;
}

function startTest() {
    timer = 60;
    started = true;

    document.getElementById("input").disabled = false;
    document.getElementById("input").value = "";
    document.getElementById("time").innerText = timer;

    loadParagraph();

    clearInterval(interval);
    interval = setInterval(updateTime, 1000);
}

function updateTime() {
    if (timer > 0) {
        timer--;
        document.getElementById("time").innerText = timer;
        calculateStats();
    } else {
        clearInterval(interval);
        document.getElementById("input").disabled = true;
    }
}

function calculateStats() {
    const input = document.getElementById("input").value;
    const original = document.getElementById("paragraph").innerText;

    let correct = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === original[i]) {
            correct++;
        }
    }

    let accuracy = input.length === 0 ? 100 : (correct / input.length) * 100;

    let words = input.trim().split(/\s+/).length;
    let wpm = words * (60 - timer) > 0 ? Math.round((words / (60 - timer)) * 60) : 0;

    document.getElementById("accuracy").innerText = Math.round(accuracy);
    document.getElementById("wpm").innerText = wpm;
}