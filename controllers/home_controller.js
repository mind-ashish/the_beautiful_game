
module.exports.home=function(req,res){
    return res.render('home',{   //path is wrt views
        layout:'home_layout',  //setting custom layout for home page, than default layout
        title:'The-beautiful-game'

    });
}