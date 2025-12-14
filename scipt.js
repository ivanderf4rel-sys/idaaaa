function hitungBMI() {
    let berat = document.getElementById("berat").value;
    let tinggi = document.getElementById("tinggi").value / 100;

    if (berat === "" || tinggi === 0) {
        alert("Masukkan berat dan tinggi badan!");
        return;
    }

    let bmi = berat / (tinggi * tinggi);
    bmi = bmi.toFixed(1);

    let kategori = "";
    let saran = "";

    if (bmi < 18.5) {
        kategori = "Berat badan kurang";
        saran = "Perbanyak asupan gizi dan latihan ringan 💪";
    } else if (bmi < 25) {
        kategori = "Berat badan ideal";
        saran = "Pertahankan pola hidup sehat 🏃‍♂️";
    } else if (bmi < 30) {
        kategori = "Berat badan berlebih";
        saran = "Rutin olahraga dan jaga pola makan 🥗";
    } else {
        kategori = "Obesitas";
        saran = "Konsultasi dan mulai program olahraga 💥";
    }

    document.getElementById("hasil").innerHTML =
        `BMI: <b>${bmi}</b><br>
         Kategori: <b>${kategori}</b><br>
         <small>${saran}</small>`;
}
