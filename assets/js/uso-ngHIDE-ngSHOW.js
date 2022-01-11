/*Utilizacion de ng-show y ng-hide para animar la adquisicion de datos para el usuario*/
angular.module("myApp", []).controller('myController', ['$scope', '$http', (s, h) =>{
    s.arreglo = [];
    s.loading = true;
    h.get("https://jsonplaceholder.typicode.com/posts").then(data => {s.arreglo = data.data; s.loading = false;}, error => s.loading = false);
  }
]);
