const CityModel = require("../models/cities");
const JobModel = require("../models/job");

class FrontendController {
    jobs = async (req, res) => {
        let jobs = await JobModel.find({ city: req.body.city, name: req.body.job }).select(['name', 'companyName', 'location', 'salaryRangeStart', 'salaryRangeEnd', 'banner', 'created_at', 'description']);

        res.status(200).send({
            "message": "success",
            "jobs": jobs,
            "selectedJob": jobs[0]
        })
    }

    newJob = async (req, res) => {
        let job = await JobModel.create(req.body);
        res.status(201).send(
            {
                message: "success",
                data: job
            }
        )
    }

    homeScreen = async (req, res) => {
        let cities = await CityModel.find().select(['name']);
        let jobs = await JobModel.find().select(['name']);

        // let jobRoles = await JobROle.find().select(['name']);
        res.status(200).send(
            {
                message: "success",
                data: {
                    cities: cities,
                    jobs: jobs
                }
            }
        )
    }


}



module.exports = FrontendController;