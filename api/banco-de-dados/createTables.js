const ModeloTabela = require('../rotas/fornecedores/model')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)