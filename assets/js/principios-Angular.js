/*Toda aplicacion necesita de un modulo */
var app = angular.module("MyFirstApp", [/*Se coloca mas modulos */]) /* nombre de la aplicacion, modulos a utilizar */
/*Referencia a la aplicacion */
app.controller("FirstController", function($scope){/*Nombre del controlador, funcion */
    /*A scope se le puede enlazar varios atributos, variables, metodos que estaran disponibles para la vista */
    $scope.nombre = "User";
    $scope.nuevoComentario = {};
    $scope.comentarios = [/*Utilizacion de un arreglo en angular */
      {
          comentario: "Lorem ipsum dolor sit amet.",
          username: "User 1",
      },
      {
          comentario: "Lorem ipsum dolor sit amet.",
          username: "User 2",
      },
      {
          comentario: "Lorem ipsum dolor sit amet.",
          username: "User 3",
      }
    ];
    $scope.agregarComentario = () => $scope.comentarios.push($scope.nuevoComentario);/*Declaracion de una funcion*/
    $scope.agregarComentario_1 = () => { /*Declaracion de una funcion*/
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});
/***********************************************Dependency Injection/************************************************/
/*En este caso se declara un arreglo como segundo paramentro del controlador, el cual, como ultimo elemento es la funcion
los nombres deben de ser las variables de angular en este caso "$scope" y regularmente se hace esto cuando se lanzara el proyecto
para evitar errores y minimizar costos de almacenamiento y rendimiento de la pagina web.
*/
var app_mod = angular.module("MySecondApp",[]).controller("SecondController",["$scope", function(s){
    s.nombre = "User";
}]);
