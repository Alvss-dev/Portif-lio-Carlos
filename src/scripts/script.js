// Cole este código no seu script.js em branco
document.addEventListener("DOMContentLoaded", function () {
  // --- FEATURE 1: EFEITO DE CÍRCULO NOS BOTÕES ---
  const botoes = document.querySelectorAll(".botaoEfeito");
  botoes.forEach((botao) => {
    const circulo = botao.querySelector(".circulo");
    if (circulo) {
      botao.addEventListener("mousemove", function (e) {
        const distanciaBotao = this.getBoundingClientRect();
        const x = e.clientX - distanciaBotao.left;
        const y = e.clientY - distanciaBotao.top;
        circulo.style.top = `${y}px`;
        circulo.style.left = `${x}px`;
      });
    }
  });

  // --- FEATURE 2: PAINEL DE ORÇAMENTO ---
  const container = document.getElementById("container");
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");

  if (container && signUpButton && signInButton) {
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }
});

// --- JAVASCRIPT ISOLADO PARA O COMPONENTE ---
document.addEventListener("DOMContentLoaded", () => {
  const infoPanel = document.getElementById("info-panel");
  const formPanel = document.getElementById("form-panel");
  const goToFormBtn = document.getElementById("goToFormBtn");
  const goBackBtn = document.getElementById("goBackBtn");

  if (infoPanel && formPanel && goToFormBtn && goBackBtn) {
    goToFormBtn.addEventListener("click", () => {
      infoPanel.classList.remove("is-visible");
      formPanel.classList.add("is-visible");
    });

    goBackBtn.addEventListener("click", () => {
      formPanel.classList.remove("is-visible");
      infoPanel.classList.add("is-visible");
    });
  }
});

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".desktop-nav",
  ".desktop-nav a",
);
mobileNavbar.init();