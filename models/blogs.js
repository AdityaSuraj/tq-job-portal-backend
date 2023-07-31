const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogSchema = new Schema(
    {
        createdBy: {
            type: String,
        },
        thumbnail: {
            type: String
        },
        title: {
            type: String
        },
        content: {
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

const BlogModel = mongoose.model('blogs', BlogSchema);
module.exports = BlogModel;