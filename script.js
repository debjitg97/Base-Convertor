function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}

function validDec(dec) {
  if (dec.length == 0)
    return false;
  for (var i = 0; i < dec.length; i++) {
    if (dec.charAt(i) < '0' || dec.charAt(i) > '9')
      return false;
  }
  return true;
}

function validBin(bin) {
  if (bin.length == 0)
    return false;
  for (var i = 0; i < bin.length; i++) {
    if (bin.charAt(i) < '0' || bin.charAt(i) > '1')
      return false;
  }
  return true;
}

function convert() {
  var base1 = document.getElementById("base1").value, base2 = document.getElementById("base2").value;
  if (base1 == base2)
  {
    window.alert("Bases are the same!");
    return;
  }
  else if (base1 == "binary") {
    var bin = document.getElementById("first").value;
    if (bin.length == 0)
      window.alert("Binary value cannot be empty!");
    else if (!validBin(bin)) {
      window.alert("Binary value is not valid!\n1. It must be non-negative\n2. It should not have decimal points");
      document.getElementById("first").value = "";
    }
    else
      document.getElementById("second").value = bin2dec(bin);
  }
  else {
    var dec = document.getElementById("first").value;
    if (dec.length == 0)
      window.alert("Decimal value cannot be empty!");
    else if (!validDec(dec)) {
      window.alert("Decimal value is not valid!\n1. It must be non-negative\n2. It should not have decimal points");
      document.getElementById("first").value = "";
    }
    else
      document.getElementById("second").value = dec2bin(dec);
  }
}