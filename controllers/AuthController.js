const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');


class AuthController {
    login = async (req, res) => {

        const checkUser = await UserModel.find({ email: req.body.email, password: req.body.password });

        if (checkUserModel.length == 1) {

            const token = jwt.sign(
                {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone
                },
                process.env.JWT_SECRET_KEY
            )

            res.status(200).send(
                {
                    message: "success",
                    token: token
                }
            )
        } else {
            res.status(200).send(
                {
                    message: "failed",
                    data: "Please provide valid credentials"
                }
            )
        }

    }

    createAccount = async (req, res) => {

        if ((await UserModel.find({ email: req.body.email })).length >= 1) {
            return res.status(200).send(
                {
                    message: "success",
                    data: "A user is already registered with this email id"
                }
            );
        } else if ((await UserModel.find({ phone: req.body.phone })).length >= 1) {
            return res.status(200).send(
                {
                    message: "success",
                    data: "A user is already registered with this phone number"
                }
            );
        }

        let user = await UserModel.create(req.body);

        res.status(200).send(
            {
                message: "success",
                data: user
            }
        );
    }
}

module.exports = AuthController;