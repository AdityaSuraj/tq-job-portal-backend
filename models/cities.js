const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitiesSchema = new Schema(
    {
        name: {
            type: String
        },
        createdAt: {
            type: Date,
            default: mongoose.now
        }
    }
)

const CityModel = mongoose.model('cities', CitiesSchema);

module.exports = CityModel;