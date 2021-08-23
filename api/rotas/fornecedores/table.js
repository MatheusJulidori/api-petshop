const model = require('./model');

module.exports = {
    listar() {
        return model.findAll()
    }
}