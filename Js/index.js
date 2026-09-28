//No de todos os arquivos feitos


import { catalogProdutos } from './produtos.js';
import { catalogo } from './catalogo.js';
import { aplicarFiltros } from './filtro.js';
import { categoria } from './categorias.js';

const mainCatalog = document.getElementById('mainCatalog');
const categorias = document.getElementById('categorias');


// Mostra todos os produtos inicialmente
catalogProdutos.forEach((produto) => {
    catalogo(produto, mainCatalog);
});


categoria(catalogProdutos, categorias);


// Estado dos botoes somaveis: um Set para cada grupo
const tiposAtivos = new Set();
const marcasAtivas = new Set();

//Pesquisa
const formPesquisa = document.getElementById('formPesquisa');
const campoPesquisa = document.getElementById('categoria');

function atualizarCatalogo() {
    aplicarFiltros(
        catalogProdutos,
        mainCatalog,
        campoPesquisa.value,
        [...tiposAtivos],
        [...marcasAtivas]
    );
    atualizarBotaoTodas();
}

function atualizarBotaoTodas() {
    const btnTodas = categorias.querySelector('button[data-grupo="todas"]');
    const temFiltro = tiposAtivos.size > 0 ||
        marcasAtivas.size > 0 ||
        campoPesquisa.value.trim() !== '';

    if (btnTodas) {
        btnTodas.classList.toggle('ativo', !temFiltro);
    }
}

formPesquisa.addEventListener('submit', (event) => {
    event.preventDefault();
    atualizarCatalogo();
});

campoPesquisa.addEventListener('input', () => {
    atualizarCatalogo();
});

// Clique nas categorias: soma os filtros (toggle liga/desliga)
categorias.addEventListener('click', (event) => {
    const botao = event.target.closest('button[data-categoria]');

    if (!botao) {
        return;
    }

    const grupo = botao.dataset.grupo;
    const valor = botao.dataset.categoria;

    // Botao "Todas": limpa tudo
    if (grupo === 'todas') {
        tiposAtivos.clear();
        marcasAtivas.clear();
        campoPesquisa.value = '';
        categorias
            .querySelectorAll('.cat-btn')
            .forEach((btn) => btn.classList.remove('ativo'));
        botao.classList.add('ativo');
        atualizarCatalogo();
        return;
    }

    // Demais botoes: toggle no Set do seu grupo
    const setAlvo = grupo === 'tipo' ? tiposAtivos : marcasAtivas;

    if (setAlvo.has(valor)) {
        setAlvo.delete(valor);
        botao.classList.remove('ativo');
    } else {
        setAlvo.add(valor);
        botao.classList.add('ativo');
    }

    atualizarCatalogo();
});
