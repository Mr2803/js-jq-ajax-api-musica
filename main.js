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
	$.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		method: "GET",
		success: function (data) {
			console.log(data.response)
			for (var i = 0; i < data.response.length; i++) {

				console.log(data.response[i].poster + " " + data.response[i].title + data.response[i].author + " " + data.response[i].genre + " " + data.response[i].year);
			}
			
		}
	})
});