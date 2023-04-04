const Cadastro = require("./cadastroProduto")

Cadastro.inserir({
    nome:"produto1",
    preco: 30
});
console.log(Cadastro.listar());

