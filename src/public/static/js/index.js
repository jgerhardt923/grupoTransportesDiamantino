var app = new Vue(
    {
        el:"#app",
        data:{
            shippingcompany:{
                data:[],
                _data:[],
                $data:[],
                set data(value){
                    data = value;
                    this._data = data;
                    this.$data = data;
                }
            },
            driver:{
                data:[],
                _data:[],
                $data:[],
                set data(value){
                    data = value;
                    this._data = data;
                    this.$data = data;
                }
            },
            truck:{
                data:[],
                _data:[],
                $data:[],
                set data(value){
                    data = value;
                    this._data = data;
                    this.$data = data;
                }
            },
            local:{
                data:[],
                _data:[],
                $data:[],
                set data(value){
                    data = value;
                    this._data = data;
                    this.$data = data;
                }
            },
            association:{
                data:[],
                _data:[],
                $data:[],
                set data(value){
                    data = value;data.forEach(val=>{
                        val.shippingCompanyName = val.truck.shippingCompany.name;
                        val.shippingCompanyCnpj = val.truck.shippingCompany.cnpj;
                        val.truckPlate = val.truck.plate;
                        val.driverName = val.driver.name;
                        val.driverCpf = val.driver.cpf;
                    })
                    this._data = data;
                    this.$data = data;
                }
            },
            freight:{
                data:[],
                _data:[],
                $data:[],
                set data(value){
                    data = value;
                    this._data = data;
                    this.$data = data;
                }
            }
            ,
            travel:{
                data:[],
                _data:[],
                $data:[],
                set data(value){
                    data = value;
                    data.forEach(val=>{
                        val.shippingCompanyName = val.association.truck.shippingCompany.name;
                        val.shippingCompanyCnpj = val.association.truck.shippingCompany.cnpj;
                        val.truckPlate = val.association.truck.plate;
                        val.driverName = val.association.driver.name;
                        val.driverCpf = val.association.driver.cpf;
                    })
                    this._data = data;
                    this.$data = data;
                }
            },
            currentUser:{
                data:[],
                $:[],
                set data(value){
                    data = value;
                    this.$ = data;
                }
            },
            user:{
                data:[],
                _data:[],
                $data:[],
                set data(value){
                    data = value;
                    this._data = data;
                    this.$data = data;
                }
            }
        },
        methods:{
            fetchListData: function(model){
                let url = "/"+model+"/list/0";
                $.ajax({
                    url: url,
                    method:"GET",
                    success:data=>{
                        this[model].data = data.data;
                    }
                })
            },
            submitData:function(form){
                let $form = $(form);
                let model = form.replace("Form","").replace("#","");
                let url = "/"+model+"/add/0";
                $.ajax({
                    url: url,
                    method:"POST",
                    data:getFormData($form),
                    success:data=>{
                        this[model].data = data.data;
                    }
                }).done(data=>{alert("Created!");this.fetchListData(model)})
            },
            updateData:function(form, id){
                let $form = $(form);
                let model = form.replace("UpdateForm","").replace(/[0-9]/g,"").replace("#","");
                let url = "/"+model+"/update/"+id;
                $.ajax({
                    url: url,
                    method:"PUT",
                    data:getFormData($form),
                    success:data=>{
                        this[model].data = data.data;
                    }
                }).done(data=>{alert("Updated!");this.fetchListData(model)})
            },
            deleteObject:function(model, id){
                let confirm = window.confirm("do you realy want to delete it?");
                if (confirm == true){
                    let url = "/"+model+"/del/"+id;
                    $.ajax({
                        url: url,
                        method:"DELETE",
                        data:{id:id},
                        success:data=>{
                            alert("Deleted!")
                        }
                    }).done(data=>{this.fetchListData(model)})
                }
            },
            rowToForm:function(tBody, rowId){
                let body = document.querySelector("#"+tBody)
                let row = body.querySelector("#"+rowId);
                let modCels = row.querySelectorAll(".tdValue");
                modCels.forEach(value=>{
                    value.innerHTML = `<input type="text" value="${value.innerHTML}" name="${value.id}" id="${value.id}">`
                });
            },
            toggle:function(elementSelector, mili){
                $(elementSelector).toggle(mili);
            },
            showHide: function(hide, show){
                let divs = document.getElementsByClassName(hide);
                for (div of divs){
                    div.style.display = "none";
                }
                document.querySelector(show).style.display = "block";
            },
            filterModel: function(model, input){
                //console.log("ativou");
                let chave = String($(input).val()).toUpperCase();
                if (chave === ""){
                    this[model]._data = this[model].$data;
                }else{
                    this[model]._data = this[model].$data.filter((obj) => {
                        for (let item in obj){
                            if (String(obj[item]).toUpperCase().includes(chave)) return true;
                        }
                        return false;
                    });
                }
            },
            getCurrentUser: function(){
                $.ajax({
                    url: "/user/current/0",
                    method:"GET",
                    success:data=>{
                        this.currentUser.data = data.data;
                    }
                })
            }
        }
    }
)