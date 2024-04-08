function gerarTabela() {
    let linhas = parseInt(prompt(`digite o numero de linhas da sua tabela`))
    let colunas = parseInt(prompt(`digite o numero de colunas`))


let Tabela = [];
for(let i=0; i<linhas; i++){
    tabela[i] = [];

    for (let j=0; j<colunas; j++){
        tabela[i][j]= gerarnumeroaleatório(100);
    
    }}
    return tabela}
    console.table(gerarTabela())