const config = require("./src/config")
const app = require("./src/app");

app.listen(config.server.port, ()=>{
    console.log(`runing on ${config.server.port}`);
});