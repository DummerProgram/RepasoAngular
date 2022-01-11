/*Creamos un filtro personalizado para quitar las etiquetas HTML y un controlador con varios atributos*/
var app = angular.module("myApp", []).filter("removeHtml", () => texto => String(texto).replace(/<[^>]+>/gm,'')).controller("filterController", ["$scope", (s) => {
    s.myHTML = "<p>Hola Mundo</p><br>";
    s.objeto = {}
    s.objeto.title = "Titulo";
    s.objeto.user = "Usuario";
    s.objeto.price = 20.8;
  }
]);
