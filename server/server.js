const express = require("express");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
const app = express();
const client = require("./Config/db");

client.connect((err) => {
  if (err) {
    console.error("Error connecting to DB");
    return;
  }
  console.log("Connected to DB");
});

app.use(morgan("dev")); // ไว้show หน้า cmd
app.use(cors()); //ไว้กันติด
app.use(bodyParse.json({ limit: "10mb" })); //กำหนดขนาด

readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(5000, () => console.log("Server Running on port 5000"));
