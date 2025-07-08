// Cole este código no seu script.js em branco
document.addEventListener('DOMContentLoaded', function() {

    // --- FEATURE 1: EFEITO DE CÍRCULO NOS BOTÕES ---
    const botoes = document.querySelectorAll(".botaoEfeito");
    botoes.forEach((botao) => {
        const circulo = botao.querySelector(".circulo");
        if (circulo) {
            botao.addEventListener("mousemove", function(e) {
                const distanciaBotao = this.getBoundingClientRect();
                const x = e.clientX - distanciaBotao.left;
                const y = e.clientY - distanciaBotao.top;
                circulo.style.top = `${y}px`;
                circulo.style.left = `${x}px`;
            });
        }
    });

    // --- FEATURE 2: PAINEL DE ORÇAMENTO ---
    const container = document.getElementById('container');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    if (container && signUpButton && signInButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }

    // --- FEATURE 3: MENU LATERAL ---
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const pageOverlay = document.getElementById('page-overlay');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (menuToggle && sideMenu && pageOverlay && closeMenuBtn) {
        
        const toggleMenu = () => {
            document.body.classList.toggle('no-scroll');
            sideMenu.classList.toggle('active');
            pageOverlay.classList.toggle('active');
        };

        closeMenuBtn.addEventListener('click', toggleMenu);
        menuToggle.addEventListener('click', toggleMenu);
        pageOverlay.addEventListener('click', toggleMenu);
    }


    
});


        // --- JAVASCRIPT ISOLADO PARA O COMPONENTE ---
        document.addEventListener('DOMContentLoaded', () => {
            const infoPanel = document.getElementById('info-panel');
            const formPanel = document.getElementById('form-panel');
            const goToFormBtn = document.getElementById('goToFormBtn');
            const goBackBtn = document.getElementById('goBackBtn');

            if (infoPanel && formPanel && goToFormBtn && goBackBtn) {
                goToFormBtn.addEventListener('click', () => {
                    infoPanel.classList.remove('is-visible');
                    formPanel.classList.add('is-visible');
                });

                goBackBtn.addEventListener('click', () => {
                    formPanel.classList.remove('is-visible');
                    infoPanel.classList.add('is-visible');
                });
            }
        });
  