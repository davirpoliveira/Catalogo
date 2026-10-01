//Arquivo js responsável pela categorias, 
// gerando automaticamente 
// na pagina caso tenha um novo e não repetindo tipo

export function categoria(produtos, categorias) {

    //Os sets servem para meio que separar a 
    //categoria encontrada no produto[2] em dois
    //Marca e tipo.
    
    const tipos = new Set();
    const marcas = new Set();

    //ForEach para mapear a array sem repitir 
    //mesma palavras 

    produtos.forEach((produto) => {
        const [tipo, marca] = produto[2].split('|').map(s => s.trim());
        tipos.add(tipo);
        if (marca) marcas.add(marca);
    });
    
    //Parte de acressentar as categorias na página

    // 1. limpa o que tinha antes
    categorias.innerHTML = ''; 

    // 2. cria a primeira linha
    const linhaTipos = document.createElement('div');
    linhaTipos.setAttribute = ('class', 'categoriasTipos');
    linhaTipos.textContent = 'Tipos: ' + [...tipos].join(' | ');

    // 3. cria a segunda linha
    const linhaMarcas = document.createElement('div');
        linhaMarcas.setAttribute = ('class', 'categoriasMarcas');
    linhaMarcas.textContent = 'Marcas: ' + [...marcas].join(' | ');

    // 4. coloca as duas dentro do container
    categorias.append(linhaTipos, linhaMarcas);
}
