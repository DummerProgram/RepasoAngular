angular.module("myApp", ["LocalStorageModule"])
.factory("ToDoService", ["localStorageService", function(l){

    let $toDoService = {}

    $toDoService.key = "angular-toDoList"

    if (l.get($toDoService.key)) {
      $toDoService.act = l.get($toDoService.key)
    } else {
      $toDoService.act = []
    }

    $toDoService.add = function (newAct) {
      $toDoService.act.push(newAct)
      $toDoService.upDateLocalStorage()
    }

    $toDoService.upDateLocalStorage = function () {l.set($toDoService.key, $toDoService.act)}

    $toDoService.getAll = () =>  $toDoService.act

    $toDoService.removeItem = function (item) {
      $toDoService.act = $toDoService.act.filter( activity => activity != item )
      $toDoService.upDateLocalStorage()
      return $toDoService.getAll()
    }

    $toDoService.clean = function () {
      $toDoService.act = []
      $toDoService.upDateLocalStorage()
      return $toDoService.getAll()
    }

    return $toDoService
  }
])
.controller("myController",["$scope", "ToDoService", function (s, t) {
    s.toDo = t.getAll()
    s.newAct = {}

    s.addAct = function () {
      t.add(s.newAct)
      s.newAct = {}
    }

    s.removeAct = function (item) { s.toDo = t.removeItem(item) }

    s.clear = function () { s.toDo = t.clean() }
  }
])
