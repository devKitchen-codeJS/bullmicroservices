const express = require("express");
const cors = require("cors");
const config = require("./config/default.json");
require("dotenv").config();
const PORT = process.env.PORT || config.serverPort;

const app = express();
app.use(express.json());
app.use(cors());
app.use(require("morgan")("dev"));

const usersRouter = require("./routes/index");
app.use("/api", usersRouter);
const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server strated on ${PORT}`));
  } catch (e) {
    console.log("[error]", e);
  }
};
start();
