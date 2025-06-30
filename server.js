const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Conectar a MongoDB
mongoose.connect("mongodb://localhost:27017/neriDB")
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch(err => {
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
app.use(express.static('public')); // <-- Agrega esto

// Ruta para verificar si funciona
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Iniciar el server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


app.post("/contacto", async (req, res) => {
  try {
    const nuevoContacto = new Contacto(req.body);
    await nuevoContacto.save();
    res.status(201).send("Contacto guardado exitosamente");
  } catch (err) {
    res.status(500).send("Error al guardar el contacto");
  }
});