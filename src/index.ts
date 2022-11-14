import express from "express";
import mysql from "mysql";

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

app.get("/api/v1/products", (req, res) => {
  mysqlConnection.query("SELECT * FROM ProductsTAB;", (err, result) => {
    if (err) throw err;

    return res.status(200).json({
      data: result,
      status: true,
    });
  });
});

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    msg: "api route",
    status: true,
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    msg: "route is unreachable",
    status: false,
  });
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Listening on ${HOSTNAME}:${PORT}`);
});
