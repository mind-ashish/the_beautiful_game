var leagues=['Premier league', 'La liga', 'Bundesliga', 'Serie A','Uber eats Ligue 1'];
var teams=['dummy1','dumm2'];
var players=['a','b','c'];
//to change & complete
module.exports.home=function(req,res){
   // throw new Error('hello');
    return res.render('./user/search',{   //path is wrt views
        layout:'./layouts/user_layout',  //setting custom layout for home page, than default layout which is typically layout.ejs
        title:'The-beautiful-game',
        leagues:leagues,
        teams:teams,
        players:players
    });
}