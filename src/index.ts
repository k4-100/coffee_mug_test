import express, { json } from "express";
import mysql from "mysql";

import * as UTL from "./utl";

const app = express();
const PORT: number = 5000;
const HOSTNAME: string = "127.0.0.1";

const mysqlConnection = mysql.createConnection({
  host: HOSTNAME,
  user: "root",
  password: "1234",
  database: "ProductsDB",
});

mysqlConnection.connect((err) => {
  if (err) throw err;
  console.log("Connected to mysql database");
});

app.get("/api/v1/product/:id", async (req, res) => {
  let errorHappened: boolean = false;
  const id = Number(req.params.id);
  if (!id)
    return res.status(404).json({
      msg: "id couldn't be parsed",
      status: false,
    });

  const data = await UTL.queryPromise(
    mysqlConnection,
    "SELECT * FROM ProductsTAB;"
  ).catch((err) => {
    console.log("err: ", err);
    errorHappened = true;
  });

  if (errorHappened)
    return res.status(404).json({
      msg: "querry failed",
      status: false,
    });
  res.status(200).json({
    status: true,
    data,
  });
});

app.all("/api/v1/product", async (req, res) => {
  return res.status(404).json({
    msg: "no id provided",
    status: false,
  });
});

app.get("/api/v1/products", async (req, res) => {
  let errorHappened: boolean = false;

  const data = await UTL.queryPromise(
    mysqlConnection,
    "SELECT * FROM ProductsTAB;"
  ).catch((err) => {
    console.log("err: ", err);
    errorHappened = true;
  });

  if (errorHappened)
    return res.status(404).json({
      status: false,
      msg: "querry failed",
    });
  res.status(200).json({
    status: true,
    data,
  });
});

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    status: true,
    msg: "api route",
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    msg: "route is unreachable",
  });
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Listening on ${HOSTNAME}:${PORT}`);
});
