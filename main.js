function metodo() {
    var string = document.getElementById('text').value;
    var resultado = string.split(" ");
    var result = '';
    var nomes = ['spunkBR', 'tigreGESP', 'JogadorCaro', 'Evek', 'Blassi', 'VIKING', 'Rainha Debi', 'Lazy', 'Renner']
    var aux_quant = (resultado.length) / nomes.length;
    var quant = aux_quant.toFixed(0);
    var aux_nomes = 0;
    var aux_divisao = parseInt(quant);
    for (var pos = 0; pos < resultado.length; pos++) {
        var aux_pos = parseInt(pos) + 1;
        result += aux_pos + '. ' + resultado[pos] + ' - ' + nomes[aux_nomes] + '\n';
        if (pos == aux_divisao) {
            aux_divisao += parseInt(quant);
            aux_nomes = parseInt(aux_nomes) + 1;
        }
    }
    salvarResultado(result);
}


function quebrarLinhaCoordenadas() {
    var string = document.getElementById('text').value;
    var resultado = string.split(" ");
    var result = '';
    for (var pos = 0; pos < resultado.length; pos++) {
        result += resultado[pos] + '\n';
    }
    salvarResultado(result);
}

function salvarResultado(result) {
    var file = new Blob([result], { type: "text" });
    var archor = document.createElement("a");
    archor.href = URL.createObjectURL(file);
    var doc_name = prompt('Digita o nome do arquivo!')
    archor.download = doc_name;
    archor.click();
}

function quabrarLinhaComClaim(){
    var string = document.getElementById('text').value;
    var resultado = string.split(" ");
    var result = '';
    for (var pos = 0; pos < resultado.length; pos++) {
        var aux_pos = parseInt(pos) + 1;
        result += aux_pos+ '. ' + "[claim]"+resultado[pos]+"[/claim]" + '\n';
    }
    salvarResultado(result);
}

function removerCoornadasRepetidasTwoArrays(){
    var stringArrayOne = document.getElementById('text').value;
    var stringArrayTwo = document.getElementById('text1').value;
    var resultadoArrayOne = stringArrayOne.split(" ");
    var resultadoArrayTwo = stringArrayTwo.split(" ");
    for(var pos=0; pos < resultadoArrayOne.length; pos++ ){
        for(var aux=0; aux < resultadoArrayTwo.lenght; aux++){
            if(resultadoArrayOne[pos] == resultadoArrayTwo[aux]){
                resultadoArrayOne = resultadoArrayOne[pos].splice(1, pos);
            }
        }
    }
    salvarResultado(resultadoArrayOne);  
}