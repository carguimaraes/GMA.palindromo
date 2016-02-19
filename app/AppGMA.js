//2016/02
//Autor: Carlos Alberto Luciano Martins Guimarães


(function () {
 "use strict";
 angular.module("AppGMA",[]);
 angular.module("AppGMA").controller('GMACtr', function($scope)
 {
  var _this=this;
  _this.nome="Ola teste GMA 3";
  _this.palavra="";
  
  _this.verifica=function()
  {
	  var palavra=_this.palavra.split("").join("");
	  palavra=palavra.replace( /\s/g, '' )
	  	  
	  var invPalavra=palavra.split("").reverse().join("");
	  
	  
	  if(palavra==invPalavra)
	  {
		  alert("A plavra/frase é um palíndromo")
	  }
	  else
	  {
		  alert("A plavra/frase não um palíndromo")
	  }
	  
  }
		 
 });

}());