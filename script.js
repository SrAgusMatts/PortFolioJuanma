const modal = document.getElementById("modal-preview");
const modalImg = document.getElementById("img-modal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.preview-img').forEach(img => {
  img.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function scrollToContacto() {
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
}

// Animación al hacer scroll
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(el => observer.observe(el));
