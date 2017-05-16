var scrape = require('../scripts/scrape');
var Article = require('../models/article');
var controllerArticle = require('../controllers/articles');
var controllerNotes = require('../controllers/notes');

module.exports = function(router){
    router.get('/',function(req,res){
        Article.find({saved:false},function(error,))
    })
}