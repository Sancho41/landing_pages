let sections = document.querySelectorAll(".section");
const options = {
  rootMargin: "-50% 0px",
};

const ChangeNavbar = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      let navLinks = document.querySelectorAll(`.nav > a`);
      navLinks.forEach((link) => {
        if (link.getAttribute("href") == `#${id}`) link.classList.add("active");
        else link.classList.remove("active");
      });
    }
  });
};

let observer = new IntersectionObserver(ChangeNavbar, options);
sections.forEach((value) => observer.observe(value));
