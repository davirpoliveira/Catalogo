// Arquivo JS responsável pelas categorias,
// gerando automaticamente na página
// caso tenha uma nova e sem repetir tipos

export function categoria(produtos, categorias) {

    // Os Sets separam a categoria do produto[2] em dois:
    // tipo e marca. Set evita valores repetidos.

    const tipos = new Set();
    const marcas = new Set();

    // Percorre o array para mapear os valores
    // sem repetir as mesmas palavras

    produtos.forEach((produto) => {
        const [tipo, marca] = produto[2].split('|').map(s => s.trim());
        tipos.add(tipo);
        if (marca) marcas.add(marca);
    });

    // Adiciona as categorias na página

    // limpa o que tinha antes
    categorias.innerHTML = ''; 

    // Cria dois grupos e deixa eles lado a lado no css
    categorias.append(
        criarGrupoSelect('Tipos: ', 'selectTipo', [...tipos].sort(), 'Todos os tipos'),
        criarGrupoSelect('Marcas: ', 'selectMarca', [...marcas].sort(), 'Todas as marcas')
    );
}

// Faz com que crie os select dinamicamente sem ter que escrever as opções.
// Evita repetir o mesmo código para Tipo e Marca.
function criarGrupoSelect(textoLabel, selectId, opcoes, textoTodos) {
    const grupo = document.createElement('div');
    grupo.setAttribute('class', 'filtro-grupo');

    const label = document.createElement('label');
    label.setAttribute('for', selectId);
    label.textContent = textoLabel;

    const select = document.createElement('select');
    select.id = selectId;
    select.name = selectId;

    const optTodos = document.createElement('option');
    optTodos.value = '';
    optTodos.textContent = textoTodos;
    select.append(optTodos);

    opcoes.forEach((opcao) => {
        const opt = document.createElement('option');
        opt.value = opcao;
        opt.textContent = opcao;
        select.append(opt);
    });

    grupo.append(label, select);
    return grupo;
}
