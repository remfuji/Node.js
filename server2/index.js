const express = require("express");
const cors = require('cors');
const app = express();
const bodyparser = require("body-parser");
const persistance = require("./persistance.js");
app.use(bodyparser.json());
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/categorie", async (req, res) => {
  res.send(await persistance.selectAll());
});
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/categorie", async (req, res) => {
  let newAlbum = req.body;
  newAlbum.images.map((image) => {
    ultimoIdImmagine += 1;
    image.id = ultimoIdImmagine;
  });
  await persistance.insert(album);
  res.status(201).send(categorie);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
