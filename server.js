const express = require(`express`);
const app = express();

const routePersona = express.Router();
const routeProducto = express.Router();
routeProducto.use(express.json());
routePersona.use(express.json());

app.use(`/productos`, routeProducto);
app.use(`/persona`, routePersona);

let productos = [
  {
    title: "AirMAX 270",
    price: 290,
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/calzado-air-max-270-KkLcGR.png",
    id: 1,
  },
  {
    title: "AirMAX 90",
    price: 199,
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-90-g-golf-shoe-hxtVmz.png",
    id: 2,
  },
  {
    title: "AirMAX 97",
    price: 299,
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-97-g-golf-shoe-hxtVmz.png",
    id: 3,
  },
];

routeProducto.get(`/listar`, (req, res) => {
  res.json(productos);
});
routeProducto.post(`/guardar`, (req, res) => {
  productos.push(req.body);
  res.json(productos);
});

routeProducto.get(`/id`, (req, res) => {
  let producto = productos.find((item) => item.id === id);
  res.json(producto);
});

routeProducto.delete((`/id`, (req, res) => {}));

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(
    `El servidor esta escuchando en el puerto ${server.address().port}`
  );
});
server.on(`error`, (error) => console.log(`Error en el  servidor ${error}`));
