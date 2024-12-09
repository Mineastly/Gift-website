// Function to generate confetti continuously
function startConfetti() {
    setInterval(() => {
        confetti({
            particleCount: 50,
            spread: 100,
            startVelocity: 40,
            origin: {
                x: Math.random(), // Random horizontal position
                y: 0 // Always starts from the top
            },
            colors: ["#03A9F4", "#FF5722", "#FDD835"],
            gravity: 1,
            ticks: 200,
            scalar: 0.8
        });
    }, 100); // Adjust interval for frequency of confetti
}

// Start pouring confetti
startConfetti();

// Function to trigger confetti
function launchConfetti(x, direction) {
    confetti({
        particleCount: 30,
        angle: direction === "left" ? 120 : 60, // Adjust angle to face the center
        spread: 55,
        startVelocity: 35,
        origin: {
            x: x, // Origin based on the icon's position
            y: 0.5 // Middle of the screen
        },
        colors: ["#03A9F4", "#FF5722", "#FDD835"],
        gravity: 1.2
    });
}

// Add event listener to the text
document.getElementById("celebrate-text").addEventListener("click", () => {
    // Launch confetti from both sides
    launchConfetti(0.4, "right"); // Left icon confetti
    launchConfetti(0.6, "left");  // Right icon confetti
});

