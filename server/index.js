const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const user = require("./schemas/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://rusakAlexanderDB:Qq8280431@cluster0.bbsrtsy.mongodb.net/nurse?retryWrites=true&w=majority"
);
app.use(
  "/graphql",
  graphqlHTTP((req,res,err) => {
    console.log(err); 
    return {
      schema: user,
      graphiql: true,
    };
  })
);

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Connection error", err));
dbConnection.once("open", () => console.log("Connected to DB"));

app.listen(4000, (err) =>
  err ? console.log(err) : console.log("server started on port 4000")
);
