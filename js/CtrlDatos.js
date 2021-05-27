"use strict";
var forma=document.getElementById("forma"),
    salida=document.getElementById("salida");
    forma.addEventListener("submit", salidas,false);
    function salidas(){
        var  nombre=forma["nombre"].value.trim(),
             boleta=forma["boleta"].value.trim(),
             materia=forma["materia"].value.trim(),
             grupo=forma["grupo"].value.trim(),
             fecha=forma["fecha"].value.trim();
 
     salida.textContent="Hola "+nombre+ " con numero de Boleta:"+boleta+
             "\nMateria:"+materia+"  Grupo:"+grupo+
             "\nA "+fecha;
    
    }
