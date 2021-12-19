const config = require("./src/config")
const app = require("./src/app");

app.listen(config.server.port, config.server.host, ()=>{
    console.log(`runing on http://${config.server.host}:${config.server.port}`);
});