function hitung(operator) {

    let A = Number(document.getElementById("angkaA").value);
    let B = Number(document.getElementById("angkaB").value);

    let hasil;

    if (operator == '+') {
        hasil = A + B;
    } 
    else if (operator == '-') {
        hasil = A - B;
    } 
    else if (operator == '*') {
        hasil = A * B;
    } 
    else if (operator == '/') {
        if (B == 0) {
            alert("Tidak bisa dibagi dengan nol!");
            return;
        }
        hasil = A / B;
    }

    alert("Hasil perhitungan: " + hasil);
}
