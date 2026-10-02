//
// 
// Função responsável pelo filtro



import { catalogo } from './catalogo.js';

export function efetuarPesquisa(event, catalogProdutos, mainCatalog) {

    // Evita que a página recarregue ao enviar o formulário
    if (event) {
        event.preventDefault();
    }

    // Leitura dos filtros atuais
    const campoTexto = document.getElementById('categoria');
    const filtro = campoTexto ? campoTexto.value.toLowerCase().trim() : '';

    const selectTipo = document.getElementById('selectTipo');
    const selectMarca = document.getElementById('selectMarca');
    const filtroTipo = selectTipo ? selectTipo.value.toLowerCase().trim() : '';
    const filtroMarca = selectMarca ? selectMarca.value.toLowerCase().trim() : '';

    // Limpa o catálogo antes de mostrar o resultado
    mainCatalog.innerHTML = '';

    //Filtro
    catalogProdutos.forEach((produto) => {

        // Separa "Tipo | Marca" do produto[2]
        // em duas variáveis para comparar com os selects
        const [tipo, marca] = produto[2].split('|').map(s => s.trim().toLowerCase());

        const bateTexto = !filtro || [produto[0], produto[1], produto[2]].some((campo) => {

            const campoLower = campo.toLowerCase();

            // Normaliza para "VideoGame" achar "Video Game" e vice-versa
            return campoLower.includes(filtro) || campoLower.replace(/\s+/g, '').includes(filtro.replace(/\s+/g, ''));
        });

        const bateTipo = !filtroTipo || tipo === filtroTipo;
        const bateMarca = !filtroMarca || (marca && marca === filtroMarca);

        if (bateTexto && bateTipo && bateMarca) {
            catalogo(produto, mainCatalog);
        }

    });
}
