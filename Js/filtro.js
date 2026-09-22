import { catalogo } from './catalogo.js';

export function efetuarPesquisa(event, catalogProdutos, mainCatalog) {

    event.preventDefault();

    const filtro = document
        .getElementById('categoria')
        .value
        .toLowerCase();

    mainCatalog.innerHTML = '';

    catalogProdutos.forEach((produto) => {

        if (
            produto[0].toLowerCase().includes(filtro) ||
            produto[1].toLowerCase().includes(filtro) ||
            produto[2].toLowerCase().includes(filtro)
        ) {
            catalogo(produto, mainCatalog);
        }

    });
}
