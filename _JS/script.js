function calcular (n1, n2){
    n1 = parseFloat(document.getElementById('n1').value)
    n2 =  parseFloat(document.getElementById('n2').value)

    seletor = document.getElementById('seletor').value

    switch(seletor){
        case '+' :
            calculo = (n1+ n2)
            document.getElementById('resultado').innerHTML = `O resultado da  soma entre ${n1} e ${n2} é igual a ${calculo}`
            break
        
        case '-' :
            calculo = (n1 - n2)
            document.getElementById('resultado').innerHTML = `O resultado da subtração entre ${n1} e ${n2} é igual a ${calculo}`
            break
        
        case '*' :
            calculo = (n1 * n2)
            document.getElementById('resultado').innerHTML = `O resultado da soma de ${n1} e ${n2} é igual a ${calculo}`
            break

        case '/' :
            calculo = (n1 / n2)
            document.getElementById('resultado').innerHTML = `O resultado da divisão entre ${n1} e ${n2} é igual a ${calculo}`
            break


    }

   

}