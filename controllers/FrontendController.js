const CityModel = require("../models/cities");
const JobModel = require("../models/job");

class FrontendController {
    jobs = async (req, res) => {
        let jobs = await JobModel.find().select(['name', 'companyName', 'salaryRangeStart', 'salaryRangeEnd', 'banner']);

        res.status(200).send({
            "message": "success",
            "data": jobs
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

        // let jobRoles = await JobROle.find().select(['name']);
        res.status(200).send(
            {
                message: "success",
                data: {
                    cities: cities
                }
            }
        )
    }


}



module.exports = FrontendController;