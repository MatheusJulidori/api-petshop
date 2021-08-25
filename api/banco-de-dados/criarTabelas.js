const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTabela
    .async()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)