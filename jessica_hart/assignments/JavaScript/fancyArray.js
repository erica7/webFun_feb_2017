function fancyArray(arr, symb, reverse) {

  var prnt_symb = "->"; // default symbol separator
  if (symb) prnt_symb = symb;

  var len = arr.length;
  if (reverse === true) { // reverse the output order
    for (var i = len-1; i >= 0; i--) console.log(i + " " + prnt_symb + " " + arr[i]);
  }
  else {
    for (var i = 0; i < len; i++) console.log(i + " " + prnt_symb + " " + arr[i]);
  }
  console.log(""); // new line separator between calls
}

fancyArray(["James", "Jill", "Jane", "Jack"]);
fancyArray(["Bob", "Jim"], "-----");
fancyArray(["Mario", "Sonic"], "==>", true);
