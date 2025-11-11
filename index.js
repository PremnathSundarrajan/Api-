const express = require("express");


const app = express();
app.use(express.json());

//Data Base
let products = [
  { id: 1, title: "Mixer", price: 3000 },
  { id: 2, title: "Phone", price: 5000 },
];

let count = 2;

app.get("/", (req, res) => {
  
  //Data from Frontend

  //DB logic

  //Data to Frontend
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  
  //Data from Frontend
  let id = Number(req.params.id);
  
  //DB logic
  const data = products.find((e) => e.id == id);
  
  //Data to Frontend
  res.send(data);
});

app.post("/products/add", (req, res) => {
  
  //Data from Frontend
  const { title, price } = req.body;
  const id = count + 1;
  count = count + 1;

  //DB logic
  const data = { id: id, title: title, price: price };
  products.push(data);

  //Data to Frontend
  res.send(products);
});

app.put("/update", (req, res) => {
  
  //Data from Frontend
  const { id, title, price } = req.body;
  const data = { id: id, title: title, price: price };
  
  //DB logic
  products = products = products.filter((p) => p.id != id);
  products.push(data);

  //Data to Frontend
  res.send(products);
});

app.delete("/del/:id", (req, res) => {
  
  //Data from Frontend
  const id = Number(req.params.id);
  
  //DB logic
  products = products.filter((p) => p.id != id);
  
  //Data to Frontend
  res.send(products);
});

app.patch("/specific/update", (req, res) => {
  
  //Data from Frontend
  const body = req.body;
  let add;

  //DB logic  
  const data = products.find((e) => e.id == body.id);

  if (body.title && body.price) {
    add = { id: body.id, title: body.title, price: body.price };
  } else if (body.title) {
    add = { id: body.id, title: body.title, price: data.price };
  } else if (body.price) {
    add = { id: body.id, title: data.title, price: body.price };
  }

  products = products.filter((e) => e.id != body.id);
  products.push(add);
  
  //Data to Frontend
  res.send(products);
});

app.listen(3000, () => {
  console.log("server is running ");
});
