import config from "config";
import express from "express";
const app = express();
const port = config.get<number>("port");

app.listen(port, () => {
  console.log(port);
});
