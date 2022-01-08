(async ()=>{
    const sequelize = require("./db");

    const user = require("../user");
    const truck = require("../truck");
    const travel = require("../travel");
    const shippingCompany = require("../shippingCompany");
    const session = require("../session");
    const local = require("../local");
    const freight = require("../freight");
    const driver = require("../driver");
    const association = require("../association");
    const payment = require("../payment");

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