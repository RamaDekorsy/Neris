const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Conectar a MongoDB
mongoose.connect("mongodb://localhost:27017/neriDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conectado a MongoDB");
}).catch(err => {
  console.error("Error al conectar a MongoDB", err);
});

// Importar tablas
const {
  Propiedad, Cliente, Consulta,
  Propietario, Contacto, Imagen
} = require('./base');

// Config del server
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Ruta para verificar si funciona
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Iniciar el server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
