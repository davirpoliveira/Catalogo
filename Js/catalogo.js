// Responsável por montar o card de cada produto no catálogo.
// Recebe produto no formato [nome, descrição, categoria, imagem, preço].

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
    descricao.setAttribute('class', 'descricao');
    descricao.textContent = produto[1];

    const categoria = document.createElement('p');
    categoria.setAttribute('class', 'categoria');
    categoria.textContent = produto[2];

    const preco = document.createElement('p');
    preco.setAttribute('class', 'preco');
    preco.textContent = `R$ ${produto[4].toFixed(2)}`;

    const imgWrap = document.createElement('div');
    imgWrap.setAttribute('class', 'img-wrap');
    imgWrap.append(img);

    boxProduto.append(imgWrap, nome, descricao, categoria, preco);

    mainCatalog.append(boxProduto);
}
