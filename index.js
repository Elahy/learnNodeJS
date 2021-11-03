import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mysql from "mysql";

import usersRoutes from "./routers/users.js";

dotenv.config();

const app = express();

//port
const port = process.env.PORT || 5000;

const db = mysql.createConnection({
  uri: process.env.MYSQL_URI,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("TEST!");

  res.send("Hello from homepage");
});

// Create table

app.get("/createemployee", (req, res) => {
  let sql =
    "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";

  db.query(sql, (err) => {
    if (err) {
      throw err;
    }

    res.send("Employee table created");
  });
});

app.listen(port, () =>
  console.log(`Server Running at port: http://localhost:${port}`)
);
