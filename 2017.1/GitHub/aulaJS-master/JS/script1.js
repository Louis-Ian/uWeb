var form = $("#form")[0]//jquery

function limpar(){
	for(var i=0; i<form.length-1; i++){
		form[i].value = ""
	}
}

function cadastrar(){
	alert("Cadastro feito!")
	console.log(form)
	var texto = form[0].value
	var preco = form[1].value
	var img = form[2].value.split("\\")[2]

	console.log(texto,preco,img)

	add(texto,preco,img)
}

limpar()