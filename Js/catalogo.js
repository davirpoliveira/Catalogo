export function catalogo(produto, mainCatalog) {

    const boxProduto = document.createElement('div');
    boxProduto.setAttribute('class', 'borderFlex');

    const img = document.createElement('img');
    img.setAttribute('src', produto[3]);
    img.setAttribute('alt', produto[0]);
    img.setAttribute('class', 'imgProduto');

    if (!produto[3]) {
        img.style.display = 'none';
    }

    const nome = document.createElement('h2');
    nome.textContent = produto[0];

    const descricao = document.createElement('p');
    descricao.textContent = produto[1];

    const categoria = document.createElement('p');
    categoria.textContent = produto[2];

    const preco = document.createElement('p');
    preco.textContent = `R$ ${produto[4].toFixed(2)}`;

    boxProduto.append(img, nome, descricao, categoria, preco);

    mainCatalog.append(boxProduto);
}
