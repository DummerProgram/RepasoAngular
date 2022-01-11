angular.module("myApp", []).controller("myController1", ["$scope", (s) => {
    s.nombre = "Username";
    setTimeout(() => s.$apply(() => s.nombre = "Nombre del Usuario"), 2000);
  }
]).controller("myController2", ["$scope", (s) => {
    s.user = "Username";
    document.querySelector("#boton").addEventListener("click", () => s.$apply(() => s.user = "Nombre del Usuario"));
  }
]);
