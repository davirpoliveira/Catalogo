//Responsável por fazer o formato do catalogo

export function catalogo(produto, mainCatalog) {

    if (!produto || !Array.isArray(produto)) {
        return;
    }

    const boxProduto = document.createElement('div');
    boxProduto.setAttribute('class', 'borderFlex');

    const wrap = document.createElement('div');
    wrap.setAttribute('class', 'img-wrap');

    const img = document.createElement('img');
    img.setAttribute('src', produto[3] || '');
    img.setAttribute('alt', produto[0] || 'Produto');
    img.setAttribute('class', 'imgProduto');
    img.loading = 'lazy';
    img.decoding = 'async';

    if (!produto[3]) {
        wrap.style.display = 'none';
    } else {
        wrap.append(img);
    }

    const nome = document.createElement('h2');
    nome.textContent = produto[0] || 'Produto sem nome';

    const descricao = document.createElement('p');
    descricao.textContent = produto[1] || '';
    descricao.setAttribute('class', 'descricao');

    const categoria = document.createElement('p');
    categoria.textContent = produto[2] || '';
    categoria.setAttribute('class', 'categoria');

    const preco = document.createElement('p');
    const valor = Number(produto[4]);
    preco.textContent = Number.isFinite(valor) ? `R$ ${valor.toFixed(2)}` : 'Preço indisponível';
    preco.setAttribute('class', 'preco');

    boxProduto.append(wrap, nome, descricao, categoria, preco);

    mainCatalog.append(boxProduto);
}
