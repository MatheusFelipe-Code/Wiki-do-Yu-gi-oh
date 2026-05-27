document.addEventListener('DOMContentLoaded', () => {
    const trilho = document.querySelector('.carrossel-trilho');
    const itens = document.querySelectorAll('.carrossel-item');
    const botaoPreve = document.querySelector('.prev');
    const botaoNext = document.querySelector('.next');

    let contador = 0;
    const totalItens = itens.length;
    const tamanhoItem = itens[0].clientWidth;

    const moverTrilho = () => {
        trilho.style.transform = 'translateX(' + (-tamanhoItem * contador) + 'px)';
    }

    botaoNext.addEventListener('click', () => {
        if (contador < totalItens - 1) {
            contador++;
        } else {
            contador = 0;
        }
        moverTrilho();
    });

    botaoPreve.addEventListener('click', () => {
        if (contador > 0) {
            contador--;
        } else {
            contador = totalItens -1;
        }
        moverTrilho();
    });
})