
var app = {

  inicio: function() {
    this.iniciaBotones();
  },

  iniciaBotones: function(){
    var entrar = document.querySelector('#entrar');

    entrar.addEventListener('click', this.login, false);
  },

  login: function(){

    alert ('Boton pulsado');
    var user= document.getElementById('user').value;
    var password = document.getElementById('password').value;

    var peticion = 'http://pilatesmanzaneque.es/login.php?user=' + usuario + '&password=' + password;
    $.getJSON('http://pilatesmanzaneque.es/login.php?user=FernandoJosef&password=Pilateslinares2016',function(data){
        console.log(JSON.stringify(data));

      });
  }

};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
};






