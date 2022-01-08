function getFormData(form){
    var unindexed_array = form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
};

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
  
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
  
    document.body.appendChild(textArea);
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
      window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
    }
  
    document.body.removeChild(textArea);
};


function genReceipt(data){

  console.log(data);

  var doc = new jsPDF();

  doc.text(`Grupo Transportes Diamantino` , 105,10,{align:"center"});
  doc.text(`Recibo N° ${data.id}` , 105,20,{align:"center"});

  doc.text("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", 105,138,{align:"center"});

  doc.setFontSize(12);

  doc.text(`Recebemos de    ${data.payer},\nA importancia de    R$${data.value},00`, 15,40);
  doc.text(`Referente a prestação de serviços de apoio logistico ao caminhao    ${data.truck.plate} \nNo mês    ${data.reference.split("-")[1]}/${data.reference.split("-")[0]}`, 15,50);

  doc.setFontSize(10);

  doc.text(new Date().toISOString().split('T')[0], 180,80);

  doc.setFontSize(14);

  doc.text("___________________________________", 105,90,{align:"center"});
  doc.text("Assinatura do credor", 105,100,{align:"center"});

  doc.save(`recibo${data.id}`);
}