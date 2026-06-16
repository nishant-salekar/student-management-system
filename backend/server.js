const express = require("express");
const cors = require("cors");

const studentRoutes =
  require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/students",
  studentRoutes
);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const path = require("path");

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});