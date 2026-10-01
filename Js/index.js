//Nó de todas os arquvios feitos


import { catalogProdutos } from './produtos.js';
import { catalogo } from './catalogo.js';
import { efetuarPesquisa } from './filtro.js';
import { categoria } from './categorias.js';

const mainCatalog = document.getElementById('mainCatalog');
const submit = document.getElementById('Submit');
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


