const express = require('express');
const app = express();
const config = require('config');

app.use(express.json())


app.listen(config.get('api.port'), () => {
    console.log('listening on port ' + port);
});