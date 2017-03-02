function numbersOnly (arr) {
  var len = arr.length;
  var newarr = [];

  for (var i = 0; i < len; i++) {
    if (typeof arr[i] === "number") {
      newarr.push(arr[i]); // Add numbers to new array
    }
  }
  return newarr;
}

function numbersOnlyRemoval (arr) {

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      for (var j = i; j < arr.length-1; j++) {
        arr[j] = arr[j+1]; // Shift array to overwrite non-numbers
      }
      arr.pop(); // Remove last array index after shift complete
    }
  } // No return needed, edits original array
}

var newArray1 = numbersOnly([1, "apple", -3, "orange", 0.5]);
console.log(newArray1);

var newArray2 = [5, "pineapple", -9, "pen", 0.7];
numbersOnlyRemoval(newArray2);
console.log(newArray2);
