const express = require("express");
const router = express.Router();

const {
  getcrypto,
  postcrypto,
  updatecrypto,
  delcrypto,
} = require("../Controllers/pcrypto");
const { auth } = require("../Middleware/auth");

router.get("/pcrypto", auth, getcrypto);
router.post("/pcrypto", auth, postcrypto);
router.put("/pcrypto", auth, updatecrypto);
router.delete("/pcrypto", auth, delcrypto);

router.get("/hello", (req, res) => {
  res.send("hello");
});

module.exports = router;
