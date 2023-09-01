(function () {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;

    startButton.addEventListener('click', () => {
        startButton.style.pointerEvents = 'none';
        deg = Math.floor(5000 + Math.random() * 5000);
        wheel.style.transition = 'all 10s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;

    });

    wheel.addEventListener('transitionend', () => {

    });
})();

const options = ["Cherry", "Bells", "Bars", "Sevens", "..."]; // Add more options

const payoutTable = {
    Cherry: 15,
    Bells: 35,
    Bars: 100,
    Sevens: 1000
    // Add more payouts
};

const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const spinButton = document.getElementById("spin-btn");
const betAmountInput = document.getElementById("bet-amount");
const payoutDisplay = document.getElementById("payout");

let currentBalance = 1000;

function getRandomOption() {
    return options[Math.floor(Math.random() * options.length)];
}

function calculatePayout(result) {
    let payout = 0;
    for (const option of result) {
        payout += payoutTable[option] || 0;
    }
    return payout;
}

function spin() {
    if (currentBalance <= 0) {
        alert("You're out of money! Please withdraw.");
        return;
    }

    const betAmount = parseFloat(betAmountInput.value);
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > currentBalance) {
        alert("Invalid bet amount.");
        return;
    }

    currentBalance -= betAmount;

    const result1 = getRandomOption();
    const result2 = getRandomOption();
    const result3 = getRandomOption();

    reel1.textContent = result1;
    reel2.textContent = result2;
    reel3.textContent = result3;

    const result = [result1, result2, result3];
    const payout = calculatePayout(result) * betAmount;
    currentBalance += payout;

    payoutDisplay.textContent = `Payout: ${payout.toFixed(2)}, Current Balance: ${currentBalance.toFixed(2)}`;
}

spinButton.addEventListener("click", spin);
