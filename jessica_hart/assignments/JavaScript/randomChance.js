function randomChance(quart, goal) {

  var win = Math.trunc(Math.random() * 100)+1; // Random 1-100 to determine win condition
  var chance, coins, win_coins;
  console.log("You've inserted " + quart + " coins.");

  for (coins = quart; coins > 0; coins--) { // 1 coin per slot game
    chance = Math.trunc(Math.random() * 100)+1; // Random 1-100

    if (chance == win) {
      console.log("...");
      win_coins = Math.trunc(Math.random() * 50)+51; // Win 51-100 coins
      coins += win_coins;
      console.log("You've won", win_coins, "coins! Balance at", coins, "coins.");

      if (goal) { // Only run if there is a goal
        if (coins >= goal) {
          console.log("You've stopped playing with", coins, "coins.")
          return coins;
        }
      }
      else return coins; // returns the winnings if no goal
    }
  }
  console.log("You are out of coins. Please insert more.")
  return 0;
}

randomChance(500);
randomChance(2);
randomChance(200, 220);
