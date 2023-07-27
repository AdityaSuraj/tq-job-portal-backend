const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        phone: {
            type: String,
            length: 13,
            unique: true
        },
        password: {
            type: String
        },
        createdAt: {
            type: Date,
            default: mongoose.now
        },
        updatedAt: {
            type: Date,
            default: mongoose.now
        }

    }
)

const UserModel = mongoose.model('Users',UserSchema);

module.exports = UserModel;