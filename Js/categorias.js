//Arquivo js responsavel pelas categorias,
// separa "Tipo | Marca" em dois grupos de botoes clicaveis

export function categoria(produtos, container) {
    // 1. Separa a coluna categoria (indice 2) em tipo e marca
    // Ex: "Notebook | Dell" -> tipo="Notebook", marca="Dell"
    const tipos = new Set();
    const marcas = new Set();

    produtos.filter(Boolean).forEach((produto) => {
        const partes = String(produto[2] || '')
            .split('|')
            .map((s) => s.trim())
            .filter(Boolean);

        if (partes[0]) {
            tipos.add(partes[0]);
        }

        if (partes[1]) {
            marcas.add(partes[1]);
        }

        partes.slice(2).forEach((extra) => marcas.add(extra));
    });

    // 2. Limpa o container
    container.innerHTML = '';

    // Helper para criar botao, agora com grupo (todas | tipo | marca)
    function criarBotao(texto, valor, grupo, ativo = false) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = texto;
        btn.dataset.categoria = valor;
        btn.dataset.grupo = grupo;
        btn.className = 'cat-btn' + (ativo ? ' ativo' : '');
        return btn;
    }

    // 3. Botao "Todas" limpa o filtro
    container.append(criarBotao('Todas', '', 'todas', true));

    // 4. Grupo Tipo (Notebook, VideoGame...)
    const grupoTipo = document.createElement('div');
    grupoTipo.className = 'cat-grupo';
    const tituloTipo = document.createElement('span');
    tituloTipo.className = 'cat-titulo';
    tituloTipo.textContent = 'Tipo:';
    grupoTipo.append(tituloTipo);
    [...tipos].sort().forEach((tipo) => {
        grupoTipo.append(criarBotao(tipo, tipo, 'tipo'));
    });
    container.append(grupoTipo);

    // 5. Grupo Marca (Dell, Sony...)
    const grupoMarca = document.createElement('div');
    grupoMarca.className = 'cat-grupo';
    const tituloMarca = document.createElement('span');
    tituloMarca.className = 'cat-titulo';
    tituloMarca.textContent = 'Marca:';
    grupoMarca.append(tituloMarca);
    [...marcas].sort().forEach((marca) => {
        grupoMarca.append(criarBotao(marca, marca, 'marca'));
    });
    container.append(grupoMarca);
}
