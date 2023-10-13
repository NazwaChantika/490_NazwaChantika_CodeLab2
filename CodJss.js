document.getElementById("Jumlah").addEventListener("click", function () {
    var A1 = parseFloat(document.getElementById("satu").value);
    var A2 = parseFloat(document.getElementById("dua").value);
  
    var result = A1 + A2;
    alert("Hasil Penjumlahan = " + result);
  });
  
  document.getElementById("Clear").addEventListener("cick", function () {
      document.getElementById("satu").value = "";
      document.getElementById("satu").value = "";
  });