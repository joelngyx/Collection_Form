require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
const pgp = require("pg-promise")();
const db = pgp(process.env.POSTGRES_URL);

app.route("/entries")
	.post(async (req, res) => {
		try {
			console.log(req.body);

			res.json({received : "true"}); 

			const {phone_number, user_name, user_age, choice_1, choice_2} = req.body;
			const newEntry = await db.query(
				"INSERT INTO entries VALUES($1, $2, $3, $4, $5);", 
				[phone_number, user_name, user_age, choice_1, choice_2]
			);

			res.json({received : "true"}); 
		} catch (e) {
			console.log(e.message);
      return res.status(403).json("Something went wrong");
		}
	}
);

app.listen(PORT, () => {
  console.log("Server running on port 5500");
});