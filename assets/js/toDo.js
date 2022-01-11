/*Ejercicio donde creamos una lista toDo como almacenamiento local del lado del
Frontend*/
var app = angular.module("MyFirstApp", ["LocalStorageModule"]).controller("Controller",["$http","$scope", "localStorageService", (h, s, l) =>{
    /*
    {
        descripcion:"",
        fecha:"",
    }
    */
    if(l.get("angular-toDoList")){/*Abrimos nuestro almacenamiento que creamos del lado del Frontend*/
      s.toDo = l.get("angular-toDoList");
    }else{/*Si no existe el almacenamiento creamos nuestro arreglo*/
      s.toDo = [];
    }
    /*Utilizamos un wwatchCollection para verificar el estado de nuestro arreglo*/
    s.$watchCollection('toDo', (newValue, oldValue) => l.set("angular-toDoList",s.toDo));
    s.addAct = () => {/*Agregamos a nuestro almacenamiento*/
        s.toDo.push(s.newAct);
        s.newAct = {};
        l.set("angular-toDoList",s.toDo);
    }
    s.clear = () => {/*Limpiamos nuestro almacenamiento*/
      s.toDo = [];
      l.set("angular-toDoList",s.toDo);
    }
}]);
