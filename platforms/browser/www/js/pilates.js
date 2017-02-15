
var app = {

	init: function(){
	
	 	var entrar = document.querySelector('#entrar');

     	entrar.addEventListener('click', this.informacion, false);
	},


	informacion: function() {

		alert ('boton pulsado');

  		$.getJSON('http://pilatesmanzaneque.es/login.php?user=FernandoJosef&password=Pilateslinares2016',function(data){
      		console.log(JSON.stringify(data));

      		$(data).each(function(index, data) {
        		   $("#alumnos").append(
                	                "<li> El alumnos es: <strong>" + data.nombre + " " + data.apellido + "</strong>"+
                    	             " y su usuario es: <strong>" + data.usuario + "</strong> </li>");
      		});
    	});
	}
};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.informacion();
  }, false);
};


