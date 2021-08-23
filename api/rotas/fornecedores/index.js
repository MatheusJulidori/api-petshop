const router = require('express').Router()
const tabelaFornecedor = require('./table')

router.use('/', async(req, res) => {
    const results = await tabelaFornecedor.listar()
    res.send(
        JSON.stringify(results)
    )
})

module.exports = router