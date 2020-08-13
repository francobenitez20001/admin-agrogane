const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 9000;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/contacto', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/nosotros', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/articulos', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/autores', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/exitos', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/servicios', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/articulo/edit/:id', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/articulo/add/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/autor/edit/:id', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/autor/add/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/exito/add/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/exito/edit/:id', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/servicio/add/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/servicio/edit/:id', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/auth', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(port);