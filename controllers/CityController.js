const CityModel = require("../models/cities")

class CityController {
    addCity = async (req, res) => {
        const city = await CityModel.create(
            {
                name: req.body.name
            }
        )

        res.status(200).send(
            {
                message: "City added successfully.",
                data: city
            }
        )
    }
}

module.exports = CityController;