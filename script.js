document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typing-text");
  const textList = [
    "Mahasiswa Teknik Informatikaa",
    "Pengembang Web Pemulaa",
    "Web Developerr",
    "Front-End Developerr",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeText() {
    const text = textList[textIndex];
    textElement.textContent = text.substring(0, charIndex);
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === text.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textList.length;
    }

    setTimeout(typeText, typeSpeed);
  }
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

  // Fungsi untuk mengecek apakah elemen terlihat di viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight - 100 && rect.bottom >= 100;
  }

  // Fungsi untuk menampilkan atau menyembunyikan elemen berdasarkan scroll
  function handleScroll() {
    document.querySelectorAll(".timeline-item").forEach((item) => {
      item.classList.toggle("show", isInViewport(item));
    });
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Jalankan sekali saat halaman dimuat

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scrollToTop");

  function toggleScrollToTop() {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }

  window.addEventListener("scroll", toggleScrollToTop);
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleScrollToTop(); // Cek saat halaman pertama kali dimuat
});

 function toggleFoto() {
   var foto = document.getElementById("fotoProfil");
   if (foto.style.display === "none") {
     foto.style.display = "block";
   } else {
     foto.style.display = "none";
   }
 }