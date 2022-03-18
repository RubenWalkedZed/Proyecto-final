const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('assets'));
app.use('/librerias',express.static('node_modules'));

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/ver/index.html'));
})

app.get('/gastos', function(request, response) {
    response.sendFile(path.join(__dirname, '/ver/gastos.html'));
})

app.get('/ingresos', function(request, response) {
    response.sendFile(path.join(__dirname, '/ver/ingresos.html'));
})

app.listen(3000)
console.log('Su server esta corriendo en el puerto 3000')
