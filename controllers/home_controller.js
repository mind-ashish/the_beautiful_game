var leagues=['Premier league', 'La liga', 'Bundesliga', 'Serie A','Uber eats Ligue 1'];
var teams=['dummy1','dumm2'];
var players=['a','b','c'];
//to change & complete
module.exports.home=function(req,res){
    return res.render('./home/home.ejs',{   //path is wrt views
        layout:'./layouts/home_layout',  //setting custom layout for home page, than default layout which is typically layout.ejs
        title:'The-beautiful-game',
    });
}

module.exports.login=function(req,res){
    return res.render('./home/login.ejs',{   
        layout:'./layouts/home_layout', 
        title:'The-beautiful-game',
    });

}
module.exports.signup=function(req,res){
    return res.render('./home/signup.ejs',{   
        layout:'./layouts/home_layout', 
        title:'The-beautiful-game',
    });

}
module.exports.goodbye=function(req,res){
    return res.render('./home/goodbye.ejs',{   
        layout:'./layouts/home_layout', 
        title:'The-beautiful-game',
    });

}
module.exports.forgotPassword=function(req,res){
    return res.render('./home/forgotPassword.ejs',{   
        layout:'./layouts/home_layout', 
        title:'The-beautiful-game',
    });

}
module.exports.changePassword=function(req,res){
    return res.render('./home/changePassword.ejs',{   
        layout:'./layouts/home_layout', 
        title:'The-beautiful-game',
    });

}
module.exports.admin=function(req,res){
    return res.render('./home/adminInput.ejs',{   
        layout:'./layouts/home_layout', 
        title:'The-beautiful-game',
    });

}