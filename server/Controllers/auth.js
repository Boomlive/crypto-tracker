const client = require("../Config/db");
const bcrypt = require("bcryptjs"); // hashpassword
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    //checkuser
    const { email, password } = req.body;
    const user = await client.query("SELECT * FROM person WHERE email = $1", [
      email,
    ]);
    if (!user.rowCount == 0) {
      return res.send(`person:${email} already exists`).status(400);
    }
    //encode
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);
    //save
    await client.query("INSERT INTO person (email, password) VALUES ($1, $2)", [
      email,
      password_hash,
    ]);
    res.send("register suss").status(200);
  } catch (err) {
    res
      .json({
        status: "fail",
        msg: "server error",
      })
      .status(500);
  }
};

exports.login = async (req, res) => {
  try {
    //check user
    const { email, password } = req.body;
    const user = await client.query("SELECT * FROM person WHERE email = $1", [
      email,
    ]);
    if (!user.rowCount == 0) {
      const isMatch = await bcrypt.compare(password, user.rows[0].password);

      if (!isMatch) {
        res.send(`Password Invalid !!`).status(401);
      }

      //payload
      let payload = {
        user: {
          email: email,
          role: user.rows[0].role,
        },
      };

      //gentoken
      jwt.sign(
        payload,
        process.env.TOKEN_SEC,
        { expiresIn: "1d" },
        (err, token) => {
          if (err) throw err;
          res.json({ token, payload });
        }
      );
    } else {
      res.send("person not found").status(401);
    }
  } catch (err) {
    res
      .json({
        status: "fail",
        msg: "server error",
      })
      .status(500);
  }
};

exports.currentUser = async (req, res) => {
  try {
    const user = await client.query(
      "SELECT email FROM person WHERE email = $1",
      [req.user.email]
    );
    if (!user.rowCount == 0) {
      res.send(user.rows);
    } else {
      res.status(201).send("invalid user");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};
