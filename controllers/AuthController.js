const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const md5 = require('md5');


class AuthController {
    login = async (req, res) => {

        const checkUser = await UserModel.find({ email: req.body.email, password: md5(req.body.password) });

        if (checkUser.length == 1) {

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


        console.log(req.body);

    
        let user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: md5(req.body.password)
        });

        res.status(200).send(
            {
                message: "success",
                data: user
            }
        );
    }
}

module.exports = AuthController;