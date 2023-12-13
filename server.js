const cors = require("cors");
const express = require("express");
const app = express();

let corsOptions = {
  origin: ["http://localhost:3000", "https://gcs-integration-b1nb1bih7-amit456789.vercel.app"]
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

const port = 8080;

app.get("/", (req, res, next) => {
  console.log("HELLO WORLD");
  res.send("HELLO WORLD");
});

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
