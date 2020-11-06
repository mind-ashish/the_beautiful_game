var title='The-beautiful-game';
var layout='./layouts/user_layout';


module.exports.home=function(req,res){
    return res.render('./user/home.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.notifications=function(req,res){
    return res.render('./user/notifications.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.chatbox=function(req,res){
    return res.render('./user/chat_box.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.friends=function(req,res){
    return res.render('./user/friends.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.profile=function(req,res){
    return res.render('./user/profile.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.post=function(req,res){
    return res.render('./user/post.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.search=function(req,res){
    return res.render('./user/search.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.settings=function(req,res){
    return res.render('./user/settings.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.trends=function(req,res){
    return res.render('./user/trending.ejs',{
        layout:layout,
        title:title
    });
}
module.exports.deactivate=function(req,res){
    return res.render('./user/deactivateAccount.ejs',{
        layout:layout,
        title:title
    });
}
