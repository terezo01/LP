function calcular(){
    carro = document.getElementById("carro").value
    horario = parseInt(document.getElementById("horario").value)
    km = parseInt(document.getElementById("km").value)
    dia = document.getElementById("dia").value
    res = document.getElementById("res")

    if(carro.toLowerCase() === "comum"){
        valorViagem = km*2.5
    }
    else if(carro.toLowerCase() === "premium"){
        valorViagem = km*4.5
    }
    else if(carro.toLowerCase() === "vip"){
        valorViagem = km*7.8
    }
    else{
        alert("Digite um valor Válido no espaço (TIPO DE CARRO)")
    }


    if(horario <= 6){
        valorTotal = valorViagem*1.20
    }
    else if(((dia === "segunda") || (dia === "terça") || (dia ==="quarta") || (dia ==="quinta") || (dia ==="sexta")) && ((horario >= 6 && horario <= 10 ) || (horario >= 17 && horario <= 20))){
        valorTotal = valorViagem*1.15
    }
    else if(dia.toLowerCase() === "domingo" && (horario >= 15 && horario <= 17)){
        valorTotal = valorViagem*0.90
    }
    else{
        valorTotal = valorViagem
    }


    if(km > 100){
        res.innerHTML = `O valor da viagem é: R$${valorTotal + 50}`
    }
    else{
        res.innerHTML = `O valor da viagem é: R$${valorTotal}`
    }
}