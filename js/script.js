/*$("#appel-ajax").click(function(){
//	type : 'GET',
	url: 'http://docusland.fr/code-academie/js_bruteforce/dico.txt',
	datatype: 'dico.txt',
	console.log('dfdgf');
})

$("#appel-ajax").click(function(){
    $.ajax({url: "http://docusland.fr/code-academie/js_bruteforce/dico.txt", success: function(result){
        $("#div1").html(result);
        alert(pouet);
    }});
}); */


jQuery(document).ready(function appeler(){

	var dicoTxt;

	$("#appelAjax").click(function(){
		//Appel Ajax, l'url n'existe plus....
        var dicoTxt = type : 'GET', url: 'http://docusland.fr/code-academie/js_bruteforce/dico.txt', datatype: 'dico.txt';
    });


	$('#appelAjax').click(function decodeur() {
		dicoTxt.split();
		//division du dico.txt en tableau
		for (var i = 0; i < dicoTxt.length; i++) {
			//boucle for pour parcourir le tableau
			var adresse = "http://docusland.fr/code-academie/js_bruteforce/";
			//nouvelle variable correspondant à l'adresse du test
			adresse = adresse.pushState({ path: this.path }, "", "http://docusland.fr/code-academie/js_bruteforce/" + "?password=" + dicoTxt[i]);
			//changement de l'adresse avec "?password=" et la valeau de "i"
			adresse.reload();
			//rechargement de cette page pour tester la nouvelle adresse
				if (adresse != false) {
					//si cette valeur de i ne renvoir pas vrai, alors la boucle continue à tourner
					return dicoTxt[i];
					//si elle est égal à vrai, j'ai un retour et l'alert l'affiche
					alert('dicoTxt[i]')
				}
		}
	});

});

