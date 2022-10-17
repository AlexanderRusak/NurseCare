const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const user = require("./schemas/schema");
const mongoose = require("mongoose");
const multer = require('multer')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './images')
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
  },
});

const upload = multer({ storage: Storage });

app.get('/', (req, res) => {
  res.status(200).send('You can post to /api/upload.')
});

app.post('/api/upload', upload.array('photo', 3), (req, res) => {
  console.log('file', req.files)
  console.log('body', req.body)
  res.status(200).json({
    message: 'success!',
  })
});

mongoose.connect(
  "mongodb+srv://rusakAlexanderDB:Qq8280431@cluster0.bbsrtsy.mongodb.net/nurse?retryWrites=true&w=majority"
);
app.use("/graphql", graphqlHTTP({ schema: user, graphiql: true }));

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Connection error", err));
dbConnection.once("open", () => console.log("Connected to DB"));

app.listen(4001, (err) =>
  err ? console.log(err) : console.log("server started on port 4001")
);
