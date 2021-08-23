const express = require('express');
const app = express();
const config = require('config');

app.use(express.json())


const router = require('./rotas/fornecedores');
app.use('/api/fornecedores', router)

var port = config.get('api.port')

app.listen(port, () => {
    console.log('listening on port ' + port);
});