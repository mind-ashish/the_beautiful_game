var title='The-beautiful-game';
var layout='./layouts/home_layout';
var leagues=['Premier league', 'La liga', 'Bundesliga', 'Serie A','Uber eats Ligue 1'];
var teams=['dummy1','dumm2'];
var players=['a','b','c'];
module.exports.details=function(req,res){
    return res.render('./home/completeDetails.ejs',{   
        layout:layout, 
        title:title
    });
}

module.exports.players=function(req,res){
    return res.render('./home/players.ejs',{   
        layout:layout,
        title:title,
        players:players
    });

}
module.exports.teams=function(req,res){
    return res.render('./home/teams.ejs',{   
        layout:layout,
        title:title,
        teams:teams
    });

}
module.exports.leagues=function(req,res){
    return res.render('./home/leagues.ejs',{   
        layout:layout,
        title:title,
        leagues:leagues
    });

}
