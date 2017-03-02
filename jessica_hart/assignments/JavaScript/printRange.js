function printRange(start, end, skip) {

  var incr = 1; // Increment by 1 if skip is not specified
  if (skip) incr = skip;

  if (end) {
    for (var i = start; i < end; i+=incr) console.log(i);
  }
  else { // If end is not specified, start at 0 and stop at start
    for (var i = 0; i < start; i+=incr) console.log(i);
  }
  console.log(""); // Separating new line after each call
}

printRange(2, 10, 2);
printRange(4, 8);
printRange(-3, 1);
printRange(4);
