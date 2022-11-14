import express from "express";

const app = express();
const PORT = 5000;
const HOSTNAME = "127.0.0.1";

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
