const CSV = require('../models/csvModel');

// This ia a controller function that handles the "home" route.
// It retrieves CSV files from the database and renders a view.
module.exports.home = async function(req, res){
    try{
        // Retrieves CSV files from the database
        const csvFiles = await CSV.find({});

        // Render the "home" view with the retrieved csv files 
        return res.render('home',{
            files : csvFiles,
            title: 'Home',
            style: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">',
            script: '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>',
        });
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }   
}
