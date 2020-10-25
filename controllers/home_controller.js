
module.exports.home=function(req,res){
   // throw new Error('hello');
    return res.render('changePassword',{   //path is wrt views
        layout:'./layouts/home_layout',  //setting custom layout for home page, than default layout
        title:'The-beautiful-game'
        
    });
}