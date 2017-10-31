var express = require('express')
  , router = express.Router();

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  router.get('/', function (req, res) {
    console.log("yo");
    res.render('index');
  });



module.exports = router








