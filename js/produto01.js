document.addEventListener("DOMContentLoaded", function () {
    const comprarButton = document.querySelector('.botao-comprar');

    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

   
    const clickEvent = isMobile ? 'touchstart' : 'click';

    comprarButton.addEventListener(clickEvent, function () {
        const productImage = document.querySelector('.product-image').src;
        const productTitle = document.querySelector('.product-title').innerText;
        const productPrice = document.querySelector('.product-price').innerText;

        const newItem = {
            image: productImage,
            title: productTitle,
            price: productPrice,
            quantity: 1,
        };

        let carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinhoItens.push(newItem);
        localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
    });
});






