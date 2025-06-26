// base.js
const mongoose = require("mongoose");

// Propiedad
const PropiedadSchema = new mongoose.Schema({
  direccion: { type: String, required: true },
  tipo: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: String,
  disponible: { type: Boolean, default: true },
  propietario: { type: mongoose.Schema.Types.ObjectId, ref: "Propietario" },
  imagenes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Imagen" }]
});

// Cliente
const ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: String,
  consultas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Consulta" }]
});

// Consulta
const ConsultaSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: true },
  propiedad: { type: mongoose.Schema.Types.ObjectId, ref: "Propiedad", required: true },
  mensaje: String,
  fecha: { type: Date, default: Date.now }
});

// Propietario
const PropietarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: String,
  telefono: String,
  propiedades: [{ type: mongoose.Schema.Types.ObjectId, ref: "Propiedad" }]
});

// Contacto
const ContactoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: String,
  mensaje: String,
  fecha: { type: Date, default: Date.now }
});

// Imagen
const ImagenSchema = new mongoose.Schema({
  url: { type: String, required: true },
  descripcion: String,
  propiedad: { type: mongoose.Schema.Types.ObjectId, ref: "Propiedad" }
});

// Exportar
module.exports = {
  Propiedad: mongoose.model("Propiedad", PropiedadSchema),
  Cliente: mongoose.model("Cliente", ClienteSchema),
  Consulta: mongoose.model("Consulta", ConsultaSchema),
  Propietario: mongoose.model("Propietario", PropietarioSchema),
  Contacto: mongoose.model("Contactos", ContactoSchema),
  Imagen: mongoose.model("Imagen", ImagenSchema)
};
