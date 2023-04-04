let listaProdutos = []
function inserir (produto){
    listaProdutos.push(produto);
}
function listar (){
    return listaProdutos;
}
module.exports = {
    inserir, listar
}

