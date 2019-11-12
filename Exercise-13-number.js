function sorting(arrNumber) {
  // code di sini
  var temp = 0;
  // arr.sort(function(value1, value2){return value1-value2;});
  // console.log(arr);
  for (var i = 0; i < arrNumber.length - 1; i++) {
    for (var j = 0; j < arrNumber.length - 1 - i; j++) {
      if (arrNumber[j] < arrNumber[j + 1]) {
        temp = arrNumber[j];
        arrNumber[j] = arrNumber[j + 1];
        arrNumber[j + 1] = temp;
      }
    }
  }
  return arrNumber;
}
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));

function getTotal(arrNumber) {
  // code di sini
  var counter = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[0] === arrNumber[i]) {
      counter++;
    }
  }
  return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${counter} kali`;
}
// console.log(getTotal([8, 8, 8, 8, 4, 3, 2]));

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
