/*let transportadorasmainvalue = [
    {
        "id":1,
        "nome":"Trans Jao",
        "cnpj":"1234567891234567",
        "admin":"jao",
        "cpfadmin":"12345678910",
        "senha":"abc123"
    },
    {
        "id":2,
        "nome":"Trans mt",
        "cnpj":"1234567891234568",
        "admin":"jose",
        "cpfadmin":"1234567891",
        "senha":"abc123"
    },
    {
        "id":3,
        "nome":"Trans Bahiano",
        "cnpj":"1234567891234569",
        "admin":"cleiton",
        "cpfadmin":"1234567892",
        "senha":"abc123"
    },
    {
        "id":4,
        "nome":"Fast Transportes",
        "cnpj":"1234567891234510",
        "admin":"Jorge",
        "cpfadmin":"1234567893",
        "senha":"abc123"
    },
]

let caminhoesmainvalue = [
    {
        "id":"1",
        "placa":"ABC1234",
        "eixos":"9",
        "comprimento":"25",
        "tipo":"cacamba",
        "capacidade":"50",
        "transportadora":"undefined",
    },
    {
        "id":"2",
        "placa":"QCQ1325",
        "eixos":"9",
        "comprimento":"19",
        "tipo":"graneleiro",
        "capacidade":"50",
        "transportadora":"undefined",
    },
    {
        "id":"3",
        "placa":"BCH5697",
        "eixos":"9",
        "comprimento":"25",
        "tipo":"cacamba",
        "capacidade":"50",
        "transportadora":"undefined",
    },
    {
        "id":"4",
        "placa":"RAM1258",
        "eixos":"7",
        "comprimento":"19",
        "tipo":"graneleiro",
        "capacidade":"37",
        "transportadora":"undefined",
    },
]

let motoristasmainvalue = [
    {
        "id":"1",
        "nome":"joao da silva",
        "cpf":"12345678910",
        "email":"jsilva@gmail.com",
        "telefone":"65999999999",
        "transportadora":"undefined",
    },
    {
        "id":"2",
        "nome":"raimundo nonato",
        "cpf":"12345678911",
        "email":"nonato@gmail.com",
        "telefone":"65999999991",
        "transportadora":"undefined",
    },
    {
        "id":"3",
        "nome":"pedro pereira",
        "cpf":"12345678912",
        "email":"ppereira@gmail.com",
        "telefone":"65999999992",
        "transportadora":"undefined",
    },
    {
        "id":"4",
        "nome":"maria souza",
        "cpf":"12345678913",
        "email":"msouza@gmail.com",
        "telefone":"65999999993",
        "transportadora":"undefined",
    },
]

let locaismainvalue = [
    {
        "id":"1",
        "tipo":"fazenda",
        "nome":"hervalense",
        "nomevector":"hervalense",
        "cidade":"diamantino",
        "estado":"MT",
        "balanca25m":"sim",
    },
    {
        "id":"2",
        "tipo":"fazenda",
        "nome":"reata",
        "nomevector":"reata",
        "cidade":"campo novo dos parecis",
        "estado":"MT",
        "balanca25m":"sim",
    },
    {
        "id":"3",
        "tipo":"armazen",
        "nome":"goncalves",
        "nomevector":"goncalves",
        "cidade":"nova maringa",
        "estado":"MT",
        "balanca25m":"sim",
    },
    {
        "id":"4",
        "tipo":"armazen",
        "nome":"bunge alimentos",
        "nomevector":"bunge alimentos",
        "cidade":"rondonopolis",
        "estado":"MT",
        "balanca25m":"sim",
    }
]*/


const vm = new Vue({
    el:"#app",
    data:{
        transportadoras:[],
        filteredtransportadoras:[],
        transportadorastablefields:['id', 'nome', 'cnpj', 'anntt', 'vector_admin', 'vector_cpf', 'vector_senha'],

        caminhoes:[],
        filteredcaminhoes:[],
        caminhoestablefields:['id', 'placa', 'eixos', 'comprimento', 'tipo', 'capacidade', 'transportadora'],

        motoristas:[],
        filteredmotoristas:[],
        motoristastablefields:['id', 'nome', 'cpf', 'email', 'telefone', 'transportadora'],

        locais:[],
        filteredlocais:[],
        locaistablefields:['id', 'tipo', 'nome', 'nomevector', 'cidade', 'estado', 'balanca25m'],
        
    },
    methods:{
        submit: function(model, identifiers){
            /*
            identifiers deve ser um Object de acordo com o seguinte padrão:{"nome do campo no model":"id da input correspondente"}
            */
            let data = new Object();
            for(let identifier in identifiers){
                data[identifier] = $('#'+identifiers[identifier]).val()
            }
            console.log(data);
            this.transportadoras.push(data);//apenas enquanto a API não existe.
        },
        get_data: function(url, model){
            $.get(url,function(data){
                vm[model]=data['data'];
                vm['filtered'+model]=data['data'];
            });
        },
        filterModel: function(model, input){
            //console.log("ativou");
            let chave = String($(input).val()).toUpperCase();
            if (chave === ""){
                this['filtered'+model] = this[model];
            }else{
                this['filtered'+model] = this[model].filter((obj) => {
                    for (let item in obj){
                        if (String(obj[item]).toUpperCase().includes(chave)) return true;
                    }
                    return false;
                });
            }
        },
        ordenadeModel: function(model, key, fieldId){
            let ordenade = $("#"+fieldId).data('order');
            if (ordenade === "a"){
                model.sort((a,b)=> String(a[key]).toUpperCase().localeCompare(String(b[key]).toUpperCase()));
                $("#"+fieldId).data('order', 'c');
            }else{
                if(ordenade === "c"){
                    model.reverse();
                    $("#"+fieldId).data('order', 'a');
                }
            }
        },
        showHide: function(hide, show){
            let divs = document.getElementsByClassName(hide);
            for (div of divs){
                div.style.display = "none";
            }
            document.querySelector(show).style.display = "block";
        },
    },
    components:{
        "text-datalist-input":textinput,
        "modal-form":modalFormTag,
        "custom-table":customtable,
    },
})