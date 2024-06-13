const client = require("../Config/db");

exports.getcrypto = async (req, res) => {
  try {
    const user = await client.query(
      "SELECT cryptoname, amount , price FROM person INNER JOIN cryptoport ON person.personid=cryptoport.personid where email = $1",
      [req.user.email]
    );
    res.send(user.rows);
  } catch (error) {
    res.status(201).send("error");
  }
};

exports.postcrypto = async (req, res) => {
  try {
    const { crytoname, amount, price } = req.body;
    const user = await client.query(
      "SELECT personid FROM person where email = $1",
      [req.user.email]
    );

    const query = {
      text: "INSERT INTO cryptoport (personid,cryptoname, amount, price) VALUES($1, $2, $3, $4)",
      values: [user.rows[0].personid, crytoname, amount, price],
    };

    await client.query(query);

    res.send("add crypto suss");
  } catch (error) {
    res.status(201).send("error");
  }
};

exports.updatecrypto = async (req, res) => {};
exports.delcrypto = async (req, res) => {};
