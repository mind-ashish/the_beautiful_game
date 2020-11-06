var title='The-beautiful-game:Articles';
var layout='./layouts/article_layout';


module.exports.home=function(req,res){
    return res.render('./articles/articles.ejs',{
        layout:layout,
        title:title
    });
}
