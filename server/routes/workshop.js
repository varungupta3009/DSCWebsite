const workshopRegistration = require('../models/workshop.schema')

module.exports = (Routes) =>{
    // endpoint to retrieve details from db
    Routes.route('/workshopRegistrationDetails').get(function(req, res) {
        workshopRegistration.find(function(err, body) {
            if (err) {
                console.log(err);
            } else {
                res.json(body);
            }
        });
    });

    //endpoint to push details into db
    Routes.route('/registrationWorkshop').post(function(req, res) {
        let todo = new workshopRegistration(req.body);
        todo.save()
            .then(registration => {
                res.status(200).json({'registration': 'registration added successfully'});
            })
            .catch(err => {
                res.status(400).send('registration failed');
            });
    });
}
