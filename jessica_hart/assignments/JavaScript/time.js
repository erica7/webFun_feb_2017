function readTime(hr, min, clk) {
  var relativeTime;
  var dayPeriod;

  /* Convert to 24 hour time */
  if (clk == 'PM' && hr != 12) hr += 12;
  else if (clk =='AM' && hr+min == 12) hr = 24;
  else if (clk =='AM' && hr == 12 && min > 0) hr -= 12;

  if (min == 0) relativeTime = 'exactly';
  else if (min == 5) relativeTime = '5 after';
  else if (min == 25) relativeTime = 'a quarter past';
  else if (min == 30) relativeTime = 'half past';
  else if (min == 35) {
    relativeTime = 'a quarter \'til';
    hr++;
  }
  else if (min == 55) {
    relativeTime = '5 \'til';
    hr++;
  }
  else if (min < 30) relativeTime = 'just after';
  else if (min > 30) {
    relativeTime = 'almost';
    hr++;
  }

  if (hr == 12) dayPeriod = 'noon';
  else if (hr == 0 || hr == 24) dayPeriod = 'midnight';
  else if (hr >= 6 && hr < 12) dayPeriod = 'in the morning';
  else if (hr >= 12 && hr < 17) dayPeriod = 'in the afternoon';
  else if (hr >= 17 && hr < 20) dayPeriod = 'in the evening';
  else if (hr >= 20 || hr < 6) dayPeriod = 'at night';

  /* Convert back to 12 hour time */
  if (hr == 0 ) hr += 12;
  else if (hr > 12) hr -= 12;

  console.log('It is', relativeTime, hr, dayPeriod);
}

/* Test Cases */
readTime(8, 50, "AM");
readTime(7, 15, "PM");
readTime(6, 5, "AM");
readTime(12, 0, "PM");
readTime(12, 0, "AM");
readTime(3, 35, "PM");
