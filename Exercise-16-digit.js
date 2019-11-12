function totalDigitRekursif(angka) {
  // you can only write your code here!
  // ================
  // CARA LOOPING
  // ================
  var ubahstring = String(angka);
  //   var hasil = 0;
  //   for (var i = 0; i < ubahstring.length; i++) {
  //     hasil += Number(ubahstring[i]);
  //   }
  //   return hasil;
  // }
  // ===============
  // CARA REKURSIF
  // ===============
  if (ubahstring.length === 1) {
    return Number(ubahstring);
  } else {
    return Number(ubahstring[0]) + totalDigitRekursif(ubahstring.slice(1));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
