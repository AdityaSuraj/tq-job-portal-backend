const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const JobSchema = new Schema(
    {
        name: {
            type: String
        },
        companyName: {
            type: String
        },
        description: {
            type: String
        },
        banner: {
            type: String
        },
        salaryRangeStart: {
            type: Number
        },
        salaryRangeEnd: {
            type: Number
        },
        workExperience: {
            type: Number
        },
        city: {
            type: String
        },
        location: {
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

const JobModel = mongoose.model('Jobs', JobSchema);

module.exports = JobModel;