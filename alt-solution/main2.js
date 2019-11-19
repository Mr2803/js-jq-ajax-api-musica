/* DESCRIZIONE:
 Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
Chiamata:
https://flynn.boolean.careers/exercises/api/array/music
Layout base (per chi non vuole implementarne uno suo):
https://bitbucket.org/booleancareers/ex-dischi-musicali-layout
BONUS :
Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
cambiare il layout rendendolo più custom.
NOTE:
iniziate a guardarvi cosa vi ritorna la API, per capire il tipo di dati e la struttura dati che avete a disposizione;
partite dalla questione logica e quindi andate di console.log;
poi aggiungete la questione output handlebars. */

$(document).ready(function() {
	/* var source = $(".cell").html()
	var template = Handlebars.compile(source)

	for (var i = 0; i < 10; i++) {
		$(".cds-container").append(template);
	} */



	$.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		method: "GET",
		success: function (data) {
			console.log("questo è ciò che mi ritorna l'api per intero " , data.response)
			for (var i = 0; i < data.response.length; i++) {

			
				//il source mi restituisce il div per intero che ho inserito nell'html
				var source = $(".cd-global").text()
				/* console.log(source) */
				var template = Handlebars.compile(source)
				/* console.log(template) */
				
				//avendo assegnato con handlebars la stessa chiave valore dell'array che mi restituisce l'api , non ho bisogno di creare un oggetto
				/* console.log(globalsong) */
				var html = template(data.response[i]);
				console.log(data.response[i])
				$(".cds-container.container").append(html)
			}
			
		},
		error: function (richiesta, stato, errori) {
			alert("Errore " + richiesta + stato + errori);
		}
	})
});