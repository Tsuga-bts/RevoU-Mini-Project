document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tgl = document.getElementById("tgl").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById("pesan").value.trim();
  const output = document.getElementById("output");

  // Validasi input
  if (nama.length < 3) {
    alert("Nama minimal 3 huruf!");
    return;
  }
  if (pesan.length < 5) {
    alert("Pesan minimal 5 huruf!");
    return;
  }

  const currentTime = new Date();

  output.innerHTML = `
    <p><b>Current time :</b> ${currentTime}</p>
    <p><b>Nama :</b> ${nama}</p>
    <p><b>Tanggal Lahir :</b> ${tgl}</p>
    <p><b>Jenis Kelamin :</b> ${gender}</p>
    <p><b>Pesan :</b> ${pesan}</p>
  `;

  document.getElementById("messageForm").reset();
});
