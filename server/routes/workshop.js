const {WorkshopRegistration,WorkshopDetails} = require('../models/workshop.schema')



module.exports = (Routes) =>{

    // endpoint to retrieve workshop registration details from db
    Routes.route('/workshop/registrationDetails').get((req, res) => {
        WorkshopRegistration.find(function(err, body) {
            if (err) {
                console.log(err);
            } else {
                res.json(body);
            }
        })
    })

    //endpoint to push workshop registration details into db
    Routes.route('/workshop/registration').post((req, res) => {
        var body = req.body
        body['timeStamp'] = new Date()
        let workshopRegistration = new WorkshopRegistration(body);
        workshopRegistration.save()
            .then(registration => {
                res.status(200).json({'registration': 'registration added successfully'});
            })
            .catch(err => {
                res.status(400).send('registration failed');
            })
    })

    // endpoint to push workshop detials into db
    Routes.route('/workshop/add').post((req, res) => {
        var body = req.body
        body['timeStamp'] = new Date()
        let workshop = new WorkshopDetails(body)
        workshop.save()
            .then((result) => {
                res.status(200).send('Inserted successfully with \n'+JSON.stringify(result))
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    })
}
