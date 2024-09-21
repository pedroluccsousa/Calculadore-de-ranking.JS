// Code Challenge n°2

// Variables
let winners = 94;
let loses = 14;
let balance = winners - loses; // Calculate the win balance

// Function
function calculateWinners(balance) {
    // Check the value and return the level using an array
    const rankings = [
        { limit: 10, rank: "Iron" },
        { limit: 20, rank: "Bronze" },
        { limit: 50, rank: "Silver" },
        { limit: 80, rank: "Gold" },
        { limit: 90, rank: "Diamond" },
        { limit: 100, rank: "Legendary" },
        // For number of wins >= 101
        { limit: Infinity, rank: "Immortal" },
    ];
    // Loop through the rankings
    for (let i = 0; i < rankings.length; i++) {
        if (balance < rankings[i].limit) {
            return rankings[i].rank; // Return the level
        }
    }
}

// Call the function
let level = calculateWinners(balance);

// Output - Should display the message "The hero has a win balance of **{winBalance}** and is at the level of **{level}**"
console.log(`The hero has a win balance of: ${balance} and is at the level: ${level}`);
