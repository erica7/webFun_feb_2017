function birthdayCountdown(days) {
  for (var i = days; i > 0; i--) {
    if (i >= 30) console.log(i + ' days until my birthday. Such a long time... :(');
    else if (i < 30 && i >=5) console.log(i + ' days until my birthday. It\'s almost here!');
    else if (i < 5) console.log(i + ' DAYS UNTIL MY BIRTHDAY!!!');
  }
  console.log('♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«');
}

birthdayCountdown(60);
