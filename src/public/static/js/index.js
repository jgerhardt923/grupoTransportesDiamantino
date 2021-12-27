var app = new Vue(
    {
        el:"#app",
        data:{
            shippingcompany:{
                data:[],
                _data:[],
                set data(value){
                    data = value;
                    this._data = data
                }
            },
            driver:{
                data:[],
                _data:[],
                set data(value){
                    data = value;
                    this._data = data
                }
            },
            truck:{
                data:[],
                _data:[],
                set data(value){
                    data = value;
                    this._data = data
                }
            },
            local:{
                data:[],
                _data:[],
                set data(value){
                    data = value;
                    this._data = data
                }
            }
        },
        watch:{
            shippingcompany:function (){
                this.shippingcompany._data = this.shippingcompany.data;
            }
        },
        methods:{
            fetchListData: function(model){
                let url = "http://localhost:5000/"+model+"/list/0";
                console.log("it works "+url);
                $.ajax({
                    url: url,
                    method:"GET",
                    success:data=>{
                        console.log(data);
                        this[model].data = data.data;
                    }
                })
            },
            submitData:function(form){
                let $form = $(form);
                let model = form.replace("Form","").replace("#","");
                let url = "http://localhost:5000/"+model+"/add/0";
                console.log("it works "+url);
                $.ajax({
                    url: url,
                    method:"POST",
                    data:getFormData($form),
                    success:data=>{
                        console.log(data);
                        this[model].data = data.data;
                    }
                }).done(data=>{this.fetchListData(model);$form.reset()})
            }
        }
    }
)