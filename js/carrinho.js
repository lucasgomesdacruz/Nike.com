document.addEventListener("DOMContentLoaded", function () {
    atualizarCarrinho();

    function atualizarCarrinho() {
        const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
        const container = document.querySelector('.container-componentes');
        container.innerHTML = '';

        const carrinhoUnico = [];

        for (const item of carrinhoItens) {
            const itemExistente = carrinhoUnico.find((i) => i.id === item.id);

            if (itemExistente) {
                itemExistente.quantity += item.quantity;
            } else {
                carrinhoUnico.push(item);
            }
        }

        for (const item of carrinhoUnico) {
            const produtoDiv = document.createElement('div');
            produtoDiv.innerHTML = `
                <div class="conteudo-tipo">
                    <img src="${item.image}" alt="" class="cart-product-image">
                </div>
                <div class="container-info-carrinho">
                    <div class="conteudo-info">
                        <p>Produto</p>
                        <p class="product-type">${item.title}</p>
                    </div>
                    <div class="conteudo-info">
                        <p>Valor total</p>
                        <p class="cart-product-price">${item.price}</p>
                    </div>
                    <div class="conteudo-input">
                        <div class="quantidade-info">
                            <p>Quantidade:</p>
                            <input type="number" value="${item.quantity}" min="0" class="carrinho-input">
                        </div>
                    </div>
                    <div class="carrinho-remover">
                        <button type="button" class="remove-product-button">Remover</button>
                    </div>
                </div>
            `;

            const quantidadeInput = produtoDiv.querySelector('.carrinho-input');
            quantidadeInput.addEventListener('change', function () {
                const newQuantity = parseInt(quantidadeInput.value);
                if (newQuantity <= 0) {
                    carrinhoUnico.splice(carrinhoUnico.indexOf(item), 1);
                } else {
                    item.quantity = newQuantity;
                }
                localStorage.setItem('carrinho', JSON.stringify(carrinhoUnico));
                atualizarCarrinho();
            });

            const removerButton = produtoDiv.querySelector('.remove-product-button');
            removerButton.addEventListener('click', function () {
                carrinhoUnico.splice(carrinhoUnico.indexOf(item), 1);
                localStorage.setItem('carrinho', JSON.stringify(carrinhoUnico));
                atualizarCarrinho();
            });

            container.appendChild(produtoDiv);
        }

        calcularTotal(carrinhoUnico);
    }

    function calcularTotal(carrinhoUnico) {
        let totalAmount = 0;
        for (const item of carrinhoUnico) {
            const productPrice = parseFloat(item.price.replace('R$', '').replace(',', '.'));
            totalAmount += productPrice * item.quantity;
        }

        totalAmount = totalAmount.toFixed(2);
        totalAmount = totalAmount.replace('.', ',');
        document.querySelector('.cart-total-container span').innerText = 'R$ ' + totalAmount;
    }

    // ... Resto do código

    const finalizarCompraButton = document.querySelector('.botao-finalizar');
    finalizarCompraButton.addEventListener('click', function () {
        const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
        if (carrinhoItens.length === 0) {
            alert('Seu carrinho está vazio. Não é possível finalizar a compra.');
        } else {
            localStorage.removeItem('carrinho');
            alert('Obrigado pela compra!');
            window.location.href = '../index.html';
        }
    });
});

