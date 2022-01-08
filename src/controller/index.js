const config = require("../config");

module.exports = {
    get:(req, res)=>{
        res.sendFile(config.app.staticDir + "template/index.html")
    }
}