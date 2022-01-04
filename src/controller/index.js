const config = require("../config");

module.exports = {
    get:(req, res)=>{
        console.log(req.user);
        res.sendFile(config.app.staticDir + "template/index.html")
    }
}