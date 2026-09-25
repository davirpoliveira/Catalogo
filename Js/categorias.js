//Arquivo js responsável pela categorias, 
// gerando automaticamente 
// na pagina caso tenha um novo e não repetindo tipo

export function categoria(produtos, categorias) {

    const categoriasUnicas = [];

    produtos.forEach((produto) => {

        if (!categoriasUnicas.includes(produto[2])) {
            categoriasUnicas.push(produto[2]);
        }

    });

    categorias.textContent = categoriasUnicas.join(' | ');
}

