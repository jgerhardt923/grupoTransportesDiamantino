(async ()=>{
    const sequelize = require("./db");

    await sequelize.sync()
    .then(() => {
            console.log("sincronizado com sucesso!");
        }
    )
    .catch((err)=>{
            console.log(`erro ao sincronizar => ${err}`);
        }
    )
})();