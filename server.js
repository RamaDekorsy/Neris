const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
// Conectar a MongoDB
mongoose.connect("mongodb://localhost:27017/neriDB", {
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

app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.json());

// Ruta para verificar si funciona
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// Iniciar el server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// ...existing code...

// Ruta para guardar contacto
app.post('/contactos', async (req, res) => {
  try {
    console.log(req.body); // <-- Agrega esto
    const { nombre, email, mensaje } = req.body;
    const nuevoContacto = new Contacto({ nombre, email, mensaje });
    await nuevoContacto.save();
    res.status(201).json({ mensaje: 'Contacto guardado correctamente' });
  } catch (error) {
    console.error(error); // <-- Y esto
    res.status(500).json({ error: 'Error al guardar el contacto' });
  }
});

// ...existing code...