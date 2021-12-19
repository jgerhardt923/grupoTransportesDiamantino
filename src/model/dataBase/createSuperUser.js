(async ()=>{

    const config = require("../../config");
    const usermodel = require("../user");

    await usermodel.create({
        name:config.superUser.name,
        password:config.superUser.password,
        superUser:true
    })
    .then(obj=>{
        console.log("superUser "+obj.name+" has been created")
    })
    .catch(err=>{
        console.log("something wrong :/ =>"+ err)
    })
})();
