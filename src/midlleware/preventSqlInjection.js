module.exports = async(req, res, next)=>{
    if(req.method === "POST"){
        let post  = Object.values(req.body);
        post.forEach(value=>{
            String.toString(value).replace(/[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi, "");
        });
        next();
    }else{
        next();
    }
};