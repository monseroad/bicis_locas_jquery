
function validateForm(){
  
  var nombre = $('#name').val();
  var apellido = $('#lastname').val();
  var mail = $('#input-email').val();
  var contrasena = $('#input-password').val();
  var seleccionar = $('select').val();

//El campo nombre sólo debe permitir caracteres de la A-Z
//Para el campo nombre la primera letra debe ser mayúscula
  if (nombre == null || nombre.length === 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(nombre)){
    $('#name').parent().append("<span>Escriba su nombre (la primera letra mayúscula)</span>");
  }
//El campo apellido sólo debe permitir caracteres de la A-Z   
//Para el campo apellido la primera letra debe ser mayúscula
  if (apellido == null || apellido.length === 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(apellido)){
    $('#lastname').parent().append("<span>Escriba su apellido (la primera letra mayúscula)</span>");
  }
//Validar que el campo email tenga un formato válido. Ej: name@domain.com
  if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail))){
    $('#input-email').parent().append("<span>Correo electronico invalido</span>");
  }
//El campo password debe tener al menos 6 caracteres  
  if (contrasena == null || contrasena.length < 6) {
    $('#input-password').parent().append("<span>La contraseña debe tener al menos 6 caracteres</span>");
  }
//El campo password no puede ser igual a "password" ó "123456" ó "098754"
  if (contrasena === '123456' || contrasena === '0987654' || contrasena === 'pasword'){
    $('#input-password').parent().append("<span>La contraseña no puede ser igual a 'password' ó '123456' ó '098754'</span>");
  }
//El valor seleccionado de bicis, debe ser una de las opciones presentadas
  if (seleccionar == null || seleccionar === '0') {
    $('select').parent().append("<span>Debes seleccionar al menos un tipo de bici</span>")
  } 
    
  
}





	 

    
   