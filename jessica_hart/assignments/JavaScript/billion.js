function aFewBillion(amt, days) {

  /* Calculate amount obtained after X days (doubling amount after $0.01) */
  if (days) { // Only run if days were entered
    var amt_after_days = 0.01;
    for (var i = 2; i <= days; i++) {
      amt_after_days += amt_after_days * 2;
    }
    console.log("After", days, "days you will have $"+parseFloat(amt_after_days/100).toFixed(2));
  }

  /* Days required to obtain specified money amount, same rate as above */
  var days_until_amt;
  var new_amt = 0.01;
  for (days_until_amt = 1; new_amt <= amt*100; days_until_amt++) {
    new_amt += new_amt * 2;
  }
  console.log("To have $"+amt, "you will need", days_until_amt, "days, and end up with $"+parseFloat(new_amt/100).toFixed(2));
}

aFewBillion(10000, 30);   // Ten thousand $$$ and 30 days
aFewBillion(1000000000);  // One billion $$$
//aFewBillion(Infinity);  DO NOT USE
