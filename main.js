function calcular() {


    var reais = document.calcform.reais.value;
    var meses = document.calcform.meses.value;
    var juros = document.calcform.juros.value;
    var i = 0;
    var text1 = "";
    var text2 = "";


    while (i <= meses) {
        var resultado1 = reais * Math.pow((1 + (juros / 100)), i);
        var resultado2 = parseFloat(resultado1.toFixed(2));
        text1 += "<br>Resultado = " + resultado2;
        i++;
    }
    document.getElementById("tabela").innerHTML = text1;



    var rend1 = (resultado2) - (reais);
    var rend2 = parseFloat(rend1.toFixed(2));
    text2 += "<br>Rendimento = " + rend2;
    document.getElementById("rendimento").innerHTML = text2;




}