var title='The-beautiful-game';
var layout='./layouts/home_layout';
module.exports.home=function(req,res){
    return res.render('./home/home.ejs',{   //path is wrt views
        layout:layout, //setting custom layout for home page, than default layout which is typically layout.ejs
        title:title
    });
}

module.exports.login=function(req,res){
    return res.render('./home/login.ejs',{   
        layout:layout,
        title:title
    });

}
module.exports.signup=function(req,res){
    return res.render('./home/signup.ejs',{   
        layout:layout,
        title:title
    });

}
module.exports.goodbye=function(req,res){
    return res.render('./home/goodbye.ejs',{   
        layout:layout,
        title:title
    });

}
module.exports.forgotPassword=function(req,res){
    return res.render('./home/forgotPassword.ejs',{   
        layout:layout,
        title:title
    });

}
module.exports.changePassword=function(req,res){
    return res.render('./home/changePassword.ejs',{   
        layout:layout,
        title:title
    });

}
module.exports.admin=function(req,res){
    return res.render('./home/adminInput.ejs',{   
        layout:layout,
        title:title
    });

}