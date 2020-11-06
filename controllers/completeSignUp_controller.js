var title='The-beautiful-game';
var layout='./layouts/home_layout';
module.exports.details=function(req,res){
    return res.render('./home/completeDetails.ejs',{   
        layout:layout, 
        title:title
    });
}

module.exports.players=function(req,res){
    return res.render('./home/players.ejs',{   
        layout:layout,
        title:title
    });

}
module.exports.teams=function(req,res){
    return res.render('./home/teams.ejs',{   
        layout:layout,
        title:title
    });

}
module.exports.leagues=function(req,res){
    return res.render('./home/leagues.ejs',{   
        layout:layout,
        title:title
    });

}
