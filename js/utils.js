export function IMC(weight, height){
    return(weight / ((height / 100) ** 2)).toFixed(2)
}

export function ClassIMC(result){
    if(result < 18.5){
        return "Magreza"
    }
    else if(result >= 18.5 && result < 25){
        return "Normal"
    }
    else if(result >= 25 && result < 30){
        return "Sobrepeso"
    }
    else if(result >= 30 && result < 40){
        return "Obesidade"
    }
    else{
        return "Obesidade Grave"
    }
}

export function notANumber(value){
    return isNaN(value) || value == ""
}