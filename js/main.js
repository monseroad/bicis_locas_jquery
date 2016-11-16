function validateForm(){
	
	//El campo nombre sólo debe permitir caracteres de la A-Z
	 //Para el campo nombre la primera letra debe ser mayúscula
    var nombre = document.getElementById('name').value;
       if( nombre == null || nombre.length <= 3 || /^\s+$/.test(nombre) || /^[A-Za-z]*$/.test(nombre) == false || nombre.substring(0,1) == nombre.substring(0,1).toUpperCase() == false ) {
          var campo = document.getElementsByClassName('name-container')[0];
          var tagSpan = document.createElement('span');
          var texto = document.createTextNode('Debe ingresar su nombre (primera letra mayúscula)');
             tagSpan.appendChild(texto);
             campo.appendChild(tagSpan);
               return false;    
    }

    //El campo apellido sólo debe permitir caracteres de la A-Z   
    //Para el campo apellido la primera letra debe ser mayúscula
    var apellido = document.getElementById('lastname').value;
       if( apellido == null || apellido.length <= 3 || /^\s+$/.test(apellido) || /^[A-Za-z]*$/.test(apellido) == false || apellido.substring(0,1) == apellido.substring(0,1).toUpperCase() == false ) { 
          var campo = document.getElementsByClassName('lastname-container')[0];
          var tagSpan = document.createElement('span');
          var texto = document.createTextNode('Debe ingresar su apellido (primera letra mayúscula)');
             tagSpan.appendChild(texto);
             campo.appendChild(tagSpan);
               return false;   
    }
    
    //Validar que el campo email tenga un formato válido. Ej: name@domain.com
    var correo = document.getElementById('input-email').value;
       if ( correo == null || correo.length == 0 || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo) != true ) {
          var campo = document.getElementsByClassName('email-container')[0];
          var tagSpan = document.createElement('span');
          var texto = document.createTextNode('Verifique su e-mail');
            tagSpan.appendChild(texto);
            campo.appendChild(tagSpan);
              return false;   
    } 
    
    //El campo password debe tener al menos 6 caracteres                      
    var password = document.getElementById('input-password').value;
       if ( password == null || password.length < 6 ) {
          var tagSpan = document.createElement('span');
          var segundoSpan = document.getElementById('input-password');
          var padre = segundoSpan.parentNode;
             padre.insertBefore(tagSpan, segundoSpan);
          var texto = document.createTextNode('La contraseña debe tener al menos 6 caracteres');
            tagSpan.appendChild(texto);
              return false;
    } 
        
        //El campo password no puede ser igual a "password" ó "123456" ó "098754"
        else if ( password == '123456' || password == '098754' || password == 'password' ) {
            var tagSpan = document.createElement('span');
            var segundoSpan = document.getElementById('input-password');
            var padre = segundoSpan.parentNode;
               padre.insertBefore(tagSpan, segundoSpan);
            var texto = document.createTextNode('La contraseña no puede ser igual a "password" ó "123456" ó "098754');
               tagSpan.appendChild(texto);
                 return false;
        }
    
    //El valor seleccionado de bicis, debe ser una de las opciones presentadas
    var seleccionBici = document.querySelector("select").value;
       if (seleccionBici == 0) {
          var tagSpan = document.createElement('span');
          var segundoSpan = document.querySelector('select');
          var padre = segundoSpan.parentNode;
             padre.insertBefore(tagSpan, segundoSpan);
          var texto = document.createTextNode('Debes seleccionar al menos un tipo de bici');
             tagSpan.appendChild(texto);
               return false;
    }
}