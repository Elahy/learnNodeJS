import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "Abir",
    lastName: "Hasan",
    age: 21,
  },
];

// All routes are starting with /users
router.get("/", (req, res) => {
  console.log("user router");

  res.send(users);
});

export default router;
