// navbar dropdown
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");
const navItems = document.querySelectorAll(".nav-link");

function toggleNav() {
  navList.classList.toggle("active");
}

navItems.forEach(item => {
  item.addEventListener("click", toggleNav);
});
navToggle.addEventListener("click", toggleNav);

// slider
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const portfolioWrapper = document.getElementById("portfolio-list");

function scrollLeft() {
  portfolioWrapper.scrollBy({
    left: -400,
    behavior: "smooth",
  });
}

function scrollRight() {
  portfolioWrapper.scrollBy({
    left: 400,
    behavior: "smooth",
  });
}

prevBtn.addEventListener("click", scrollLeft);
nextBtn.addEventListener("click", scrollRight);

// render portfolios
const portfolios = [
  {
    title: "Kodingkeun",
    description: "Website landing page kodingkeun",
    image: "./assets/images/portfolio/kodingkeun.png",
  },
  {
    title: "SnapCatch",
    description: "Website download video youtube dan tiktok secara gratis",
    image: "./assets/images/portfolio/snapcatch.png",
  },
  {
    title: "OtakuNote",
    description: "Website crud sederhana untuk melacak progress baca komik",
    image: "./assets/images/portfolio/otakunote.png",
  },
  {
    title: "Sona",
    description: "Website booking hotel online",
    image: "./assets/images/portfolio/sona.png",
  },
];

portfolios.forEach(portfolio => {
  const portfolioItem = document.createElement("li");
  portfolioItem.classList.add("portfolio-item");

  const portfolioItemHeader = document.createElement("div");
  portfolioItemHeader.classList.add("portfolio-item-header");

  const portfolioItemTitle = document.createElement("h1");
  portfolioItemTitle.classList.add("portfolio-item-title");
  portfolioItemTitle.textContent = portfolio.title;

  const portfolioItemDescription = document.createElement("p");
  portfolioItemDescription.classList.add("portfolio-item-description");
  portfolioItemDescription.textContent = portfolio.description;

  portfolioItemHeader.appendChild(portfolioItemTitle);
  portfolioItemHeader.appendChild(portfolioItemDescription);

  const portfolioItemImage = document.createElement("img");
  portfolioItemImage.classList.add("portfolio-item-image");
  portfolioItemImage.src = portfolio.image;
  portfolioItemImage.alt = portfolio.title;

  portfolioItem.appendChild(portfolioItemHeader);
  portfolioItem.appendChild(portfolioItemImage);

  portfolioWrapper.appendChild(portfolioItem);
});

// contact form
const form = document.getElementById("contact-form");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

form.addEventListener("submit", e => {
  e.preventDefault();
  const subject = subjectInput.value;
  const message = messageInput.value;

  const link = `mailto:dafinmaulana18@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;
  window.location.href = link;

  subjectInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
