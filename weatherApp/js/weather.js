$(document).ready(function(){
	

	$("#city").on("change", function(){
		var city = $(this).val();
		var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city;

		$.post(url, function(data){
			/*console.log(data);*/
			/*var city = data.name;*/
			var temp = Math.round(data.main.temp);
			var vremenski_uslov = data.weather[0].description;
			var icon = data.weather[0].icon;
			var max = Math.round(data.main.temp_max);
			var min = Math.round(data.main.temp_min);


			$("#grad").text(city);
			$("#temp").text(temp  + " °C");
			$("#vreme").text(vremenski_uslov);
			
			var icon_url = "http://openweathermap.org/img/w/" + icon + ".png";

			$("img.ikona").attr("src", icon_url);
			$("#max").text(max);
			$("#min").text(min);

			
			$('#rezultati').show();



		});




	});



	$('#car').on('click', function()
	{
		alert('MI SMO CAREVI !!!');
	});


	$("input").on ("blur", function(){
		$("#city").css({"color": "#fff", "font-size": "18px"});
	});


})