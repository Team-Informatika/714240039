document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typing-text");

  // Daftar teks yang akan ditampilkan secara bergantian
  const textList = [
    "Mahasiswa Teknik Informatika",
    "Pengembang Web Pemula",
    "Web Developer",
    "Front-End Developer",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeText() {
    const text = textList[textIndex]; // Ambil teks dari daftar
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    textElement.textContent = text.substring(0, charIndex); // Tampilkan teks dengan efek mengetik

    // Atur kecepatan mengetik dan menghapus
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === text.length) {
      typeSpeed = 2000; // Jeda sebelum mulai menghapus
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textList.length; // Pindah ke teks selanjutnya
    }

    setTimeout(typeText, typeSpeed);
  }

  // Mulai efek mengetik setelah halaman dimuat
  setTimeout(typeText, 1000);

  // Animasi hover pada proyek
  document.querySelectorAll(".project").forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.05)";
      item.style.transition = "0.3s";
    });

    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1)";
    });
  });
});
