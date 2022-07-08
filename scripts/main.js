document.addEventListener('DOMContentLoaded', function() {
    let cont = 2;
    menuvisible = false;
    const botmenu = document.getElementById("menuimg");
    const flechader = document.getElementById("flechader");
    const flechaizq = document.getElementById("flechaizq");

    function cambiarImagen(){

        intervalo = setInterval(function(){
            
            pasaImagen(cont);
            
        },4000);

    }       


    function pasaImagen(num){

        if (cont === 1){
                
            document.getElementById("csql").src="img/circulo.png";
            document.getElementById("imgtecnologia").src="img/java.png";
            document.getElementById("cjava").src="img/circulor.png";
            console.log(cont);
            cont++;
        }
        else if(cont === 2){

            document.getElementById("cjava").src="img/circulo.png";
            document.getElementById("imgtecnologia").src="img/js.png";
            document.getElementById("cjs").src="img/circulor.png";
            console.log(cont);
            cont++;
        }
        else if(cont === 3){

            document.getElementById("cjs").src="img/circulo.png";
            document.getElementById("imgtecnologia").src="img/python.png";
            document.getElementById("cpython").src="img/circulor.png";
            console.log(cont);
            cont++;
        }
        else if (cont === 4){

            document.getElementById("cpython").src="img/circulo.png";
            document.getElementById("imgtecnologia").src="img/sql.png";
            document.getElementById("csql").src="img/circulor.png";
            console.log(cont);
            cont = 1;
        }

    }

    
        
    
    cambiarImagen();

    flechader.addEventListener("click", function(){

        clearInterval(intervalo);
        pasaImagen(cont);
        cambiarImagen();
        
    });
    flechaizq.addEventListener("click", function(){
        clearInterval(intervalo);        
        imagenAnterior(cont);
        cambiarImagen();
        console.log(cont);
    });
   

    botmenu.addEventListener("click",function(){

        menuvisible = !menuvisible;
        if(menuvisible===true){
            document.getElementById("menu").classList.remove("ocultar");
        }
        else{
            document.getElementById("menu").classList.add("ocultar");
        }
    });






    




});