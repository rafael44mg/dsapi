
const cadastro = require('./cadastro_produtos')

test('Listar Produtos sem cadastrar deve retornar vazia', () => {
    expect(cadastro.listar()).toEqual([]);
    expect(cadastro.listar().length).toBe(0);
})