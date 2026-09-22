export function catalogo(produto, mainCatalog) {

    const boxProduto = document.createElement('div');
    boxProduto.setAttribute('class', 'borderFlex');

    const nome = document.createElement('h2');
    nome.textContent = produto[0];

    const descricao = document.createElement('p');
    descricao.textContent = produto[1];

    const categoria = document.createElement('p');
    categoria.textContent = produto[2];

    const preco = document.createElement('p');
    preco.textContent = `R$ ${produto[3].toFixed(2)}`;

    boxProduto.append(nome, descricao, categoria, preco);

    mainCatalog.append(boxProduto);
}

