angular.module('myApp', [])
/*Cuando en la directiva se tiene una mayuscula en html se representa como ng-A
donde A es la mayuscula de nustra directiva ngA*/
.directive('backImg', function(){
  return function(scope, element, attrs){
    /* attrs.backImg Se hace cuando el valor de la directiva no utliza el template de angular*/
    attrs.$observe('backImg', function(value){/*Cuando tiene el valor cargado de angular*/
        element.css({
          "background": `url(${value})`,
          "background-size": "cover",
          "background-position": "center"
        })
      }
    )
    }
  }
)
.controller('myController', ['$scope', function(s){

  }
])
