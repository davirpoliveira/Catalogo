//
//
// Funcao responsavel pelo filtro



import { catalogo } from './catalogo.js';

// Filtro simples: so texto digitado (mantido para compatibilidade)
export function efetuarPesquisa(event, catalogProdutos, mainCatalog, termoBusca = null) {

    if (event) {
        event.preventDefault();
    }

    const campo = document.getElementById('categoria');

    // Se recebeu um termo direto (ex: clique na categoria), joga no input
    // Senao, le o que esta digitado no input
    if (termoBusca !== null) {
        campo.value = termoBusca;
    }

    aplicarFiltros(catalogProdutos, mainCatalog, campo.value, [], []);
}

// Filtro somavel: texto livre + varios botoes ativos
// Regra: (OU dentro do grupo) E (E entre grupos) E texto
// Ex: Tipo=[Notebook] + Marca=[Dell, Lenovo] = Notebook Dell + Notebook Lenovo
export function aplicarFiltros(catalogProdutos, mainCatalog, textoLivre, tiposAtivos, marcasAtivas) {

    const texto = String(textoLivre || '').toLowerCase().trim();
    const tipos = (tiposAtivos || []).map((t) => String(t).toLowerCase());
    const marcas = (marcasAtivas || []).map((m) => String(m).toLowerCase());

    mainCatalog.innerHTML = '';

    catalogProdutos.forEach((produto) => {

        if (!produto) {
            return;
        }

        const textoProduto = [
            produto[0],
            produto[1],
            produto[2],
        ].join(' ').toLowerCase();

        // 1. Texto livre: se vazio passa, senao precisa conter
        const passaTexto = texto === '' || textoProduto.includes(texto);

        // 2. Tipo: se nenhum selecionado passa, senao precisa de ao menos 1 (OU)
        const passaTipo = tipos.length === 0 ||
            tipos.some((tipo) => textoProduto.includes(tipo));

        // 3. Marca: mesma regra do tipo
        const passaMarca = marcas.length === 0 ||
            marcas.some((marca) => textoProduto.includes(marca));

        if (passaTexto && passaTipo && passaMarca) {
            catalogo(produto, mainCatalog);
        }

    });
}
