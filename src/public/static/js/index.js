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
                    data = value;
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
                    this._data = data;
                    this.$data = data;
                }
            }
        },
        methods:{
            fetchListData: function(model){
                let url = "http://localhost:5000/"+model+"/list/0";
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
                let url = "http://localhost:5000/"+model+"/add/0";
                $.ajax({
                    url: url,
                    method:"POST",
                    data:getFormData($form),
                    success:data=>{
                        this[model].data = data.data;
                    }
                }).done(data=>{this.fetchListData(model)})
            },
            updateData:function(form, id){
                let $form = $(form);
                let model = form.replace("UpdateForm","").replace(/[0-9]/g,"").replace("#","");
                let url = "http://localhost:5000/"+model+"/update/"+id;
                $.ajax({
                    url: url,
                    method:"PUT",
                    data:getFormData($form),
                    success:data=>{
                        this[model].data = data.data;
                    }
                }).done(data=>{this.fetchListData(model)})
            },
            deleteObject:function(model, id){
                let confirm = window.confirm("do you realy want to delete it?");
                if (confirm == true){
                    let url = "http://localhost:5000/"+model+"/del/"+id;
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
            }
        }
    }
)