const JobModel = require("../models/job");

class FrontendController {
    jobs = async (req, res) => {
        let jobs = await JobModel.find().select(['name','companyName','salaryRangeStart','salaryRangeEnd','banner']);

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


}



module.exports = FrontendController;