document.addEventListener('DOMContentLoaded', function() {


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

    
    const botaoAbrir = document.getElementById('abrirOrcamento');
    const overlay = document.getElementById('formOrcamento');
    const botaoFechar = document.querySelector('.close-form');

    if (botaoAbrir && overlay && botaoFechar) {
        botaoAbrir.addEventListener('click', () => {
            overlay.style.display = 'flex';
        });

        botaoFechar.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

});