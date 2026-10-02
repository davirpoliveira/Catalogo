// Arquivo principal: liga todos os outros módulos

//Liga todos os outros arquivos a esse
import { catalogProdutos } from './produtos.js';
import { catalogo } from './catalogo.js';
import { efetuarPesquisa } from './filtro.js';
import { categoria } from './categorias.js';

// Referências aos containers principais
const mainCatalog = document.getElementById('mainCatalog');
const categorias = document.getElementById('categorias');


// Mostra todos os produtos inicialmente
catalogProdutos.forEach((produto) => {
    catalogo(produto, mainCatalog);
});


categoria(catalogProdutos, categorias);


//Pesquisa
const formPesquisa = document.getElementById('formPesquisa');
const campoPesquisa = document.getElementById('categoria');

formPesquisa.addEventListener('submit', (event) => {
    efetuarPesquisa(event, catalogProdutos, mainCatalog);
});

campoPesquisa.addEventListener('input', () => {
    efetuarPesquisa(null, catalogProdutos, mainCatalog);
});

// Selects de Tipo e Marca criados em categorias.js
// Mesma ação para os dois, então um loop evita repetir o listener
['selectTipo', 'selectMarca'].forEach((id) => {
    const select = document.getElementById(id);
    if (select) {
        select.addEventListener('change', () => {
            efetuarPesquisa(null, catalogProdutos, mainCatalog);
        });
    }
});


