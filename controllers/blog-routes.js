 const router = require('express').Router();

 // GET Route to Display the Homepage with Handlebars
 router.get('/', async (req, res) => {
    res.render('homepage'//, {whatever model is called}
    )
 });

 module.exports = router;