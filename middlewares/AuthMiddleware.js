const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).send(
                {
                    message: "Unauthenticated"
                }
            )
        }
        req.user = user

        next()
    })
}

module.exports = authenticate;
