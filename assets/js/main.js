const links = document.querySelectorAll('.navigation a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove("activate");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("activate");
    }
  });
});

async function loadSection(id, file) {
  const res = await fetch(file);
  const content = await res.text();
  document.getElementById(id).innerHTML = content;
}

// Load konten eksternal ke section
loadSection("about", "./about.html");
loadSection("skills", "./skills.html");
loadSection("experiences", "./experiences.html");
loadSection("projects", "./projects.html");