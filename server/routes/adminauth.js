const router = require("express").Router();
const { Admin } = require("../models/admin");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const admin = await Admin.findOne({ email: req.body.email });
		if (!admin)
			return res.status(401).send({ message: "Invalid Email or Password" });

		// Compare password without bcrypt
		if (req.body.password !== admin.password)
			return res.status(401).send({ message: "Invalid Email or Password" });



			
		const token = admin.generateAuthToken();
		// console.log(admin.role)
		res.status(200).send({ data: token, role: admin.role, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;


