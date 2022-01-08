const config = require("./src/config")
const app = require("./src/app");

try{
    require("./src/model/dataBase/createSuperUser");
}catch (err){
    console.log(err)
}

app.listen(config.server.port, ()=>{
    console.log(`runing on ${config.server.port}`);
});