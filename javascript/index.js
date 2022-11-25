var otext;
							  
		function Inicio()
				{if (formppal.msj.value!="")
					{alert(formppal.msj.value);
					 formppal.msj.value="";
					}
				 if (formppal.htest.value=="")
					{alert("Debe habilitar la opción de Cookies de su navegador !");
					}	
				 formppal.usuario.focus();
				}
				
		function paso(otext)
				{
					if(otext==formppal.usuario)
						formppal.pass.focus();
					if(otext==formppal.pass)
						enviar();	
				}
				
		function enviar()
				{ if(formppal.usuario.value=="")
					{alert("Debe ingresar el Usuario !");
					 formppal.usuario.focus();
					 }
					 else
					 {formppal.submit();
					 }	
				}

// Imagenes

let index = 0;
	
		let listaimg = ["./images/wall2Low.jpg", "./images/wall3Low.jpg"];
	
	$(function() {
	
		setInterval(changeImage, 3000);
	
	});
	
	function changeImage() {
	
	
	   $('body').css("background-image", 'url(' + listaimg[index] + ')');
	
	   index++;
	
	   if(index == 2)
		  index = 0;
	}

	function changePass(){

		
	}