function idade(num){
	if (num >= 0 && num <= 12){ return "criança"}
	else if (num >= 13 && num <= 17){ return "adolescente"}
	else if (num >= 18 && num <= 25){ return "adulto"}
	else { return "veeeeelho"}
}

var teste = 40
var funcao = idade(teste)
console.log(funcao)