const year = document.getElementById("currentYear");
if (year) {
  year.textContent = new Date().getFullYear();
}

const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => observer.observe(element));

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    projectItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.style.display = shouldShow ? "block" : "none";
    });
  });
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = encodeURIComponent(document.getElementById("name").value.trim());
    const email = encodeURIComponent(document.getElementById("email").value.trim());
    const subject = encodeURIComponent(document.getElementById("subject").value);
    const message = encodeURIComponent(document.getElementById("message").value.trim());

    const body = `Nome: ${name}%0D%0AE-mail: ${email}%0D%0A%0D%0AMensagem:%0D%0A${message}`;
    window.location.href = `mailto:dev.guilherme.crm@gmail.com?subject=${subject}&body=${body}`;
  });
}
