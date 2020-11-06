var title='The-beautiful-game:admin';
var layout='./layouts/article_layout';


module.exports.home=function(req,res){
    return res.render('./adminPanel/createArticle.ejs',{
        layout:layout,
        title:title
    });
}