const fs = require(`fs`);
const express = require(`express`);
const multer = require(`multer`);
const app = express();

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set(`views`, `./views`);
app.set("view engine", "ejs");

let productos = [];

app.post("/productos", (req, res) => {
  productos.push(req.body);
  console.log(productos);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("formulario", { productos });
});

// app.get("/productos", (req, res) => {
//   res.json(productos);
// });

// routeProducto.get("/productos/:id", (req, res) => {
//   const productId = req.params.id;
//   res.json(productos);
// });
// routeProducto.put("/api/productos/:id", (req, res) => {
//   const productId = req.params.id;
//   const filetoupdate = req.body;
//   res.json(productos);
// });
// routeProducto.post("/productos", (req, res, next) => {
//   const { nombre, precio, imagen } = req.body;
//   const id = 3;
//   let newProduct = { nombre, precio, imagen, id };
//   productos.push(newProduct);
//   res.status(201).send("Producto agregado correctamente");
// });
// routeProducto.delete("/api/productos/:id", (req, res) => {
//   const productId = req.params.id;
//   res.json(productos);
// });

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(
    `El servidor esta escuchando en el puerto ${server.address().port}`
  );
});
server.on(`error`, (error) => console.log(`Error en el  servidor ${error}`));
