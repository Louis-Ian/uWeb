var list = $('#lista')

function add(texto,preco,img){
	var li =	'<li class="item">'+
					'<figure>'+
						'<img src="img/produtos/'+img+'">'+
						'<figcaption>'+
							''+texto+' por R$'+preco+''+
						'</figcaption>'+
					'</figure>'+
				'</li>'

	lista.innerHTML = lista.innerHTML + li
	
}