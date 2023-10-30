const express = require("express");
const cors = require('cors');
const app = express();
const bodyparser = require("body-parser");
let db = [
    {
      id: 1,
      nome: "mario",
      cognome: "rossi",
      numero: "123456789",
    },
    {
      id: 2,
      nome: "gianni",
      cognome: "bianchi",
      numero: "134345789",
    },
    {
      id: 3,
      nome: "giovanni",
      cognome: "verdi",
      numero: "167676789",
    },
    {
      id: 4,
      nome: "beppe",
      cognome: "vessicchio",
      numero: "14545489",
    },
  ];
app.use(bodyparser.json());
const port = 3000;
app.use(cors());



app.get("/", (req, res) => {
  res.json(db);
});
// app.post('/', (req, res) => {
//     req.
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});