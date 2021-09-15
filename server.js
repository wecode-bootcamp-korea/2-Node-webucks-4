
import express from "express";
const { category } = require('./category');
const { products } = require('./products');
const { product } = require('./product');

const app = express();
const PORT = 7000 || process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello");
  });
app.get('/products/categories',category);
app.get('/products',products);
app.get('/products/2',product);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
