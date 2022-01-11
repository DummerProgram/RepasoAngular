var app = angular.module("MyFirstApp", []).controller("Controller", ["$http", "$scope", (h, s) => {
    /*Obteniendo datos con el metodo GET */
    /*Then tiene dos argumentos el primero en caso de recibir sin error y en caso de recibir con error */
    s.arreglo = [];
    s.newPost = {};
    h.get("https://jsonplaceholder.typicode.com/posts").then(data => s.arreglo = data.data, error => console.error(error));
    /*Obteniendo datos con el metodo POST */
    /*Se debe de crear un metodo para poder accionar el POSTS */
    /*Enviando un dato con el metodo POST como segundo parametro se especifica la estructura de nuestro objeto*/
    s.addPost = () => {
        h.post("https://jsonplaceholder.typicode.com/posts", {
            title: s.newPost.title,
            body: s.newPost.body,
            userId: 1
        /*Then tiene dos argumentos el primero en caso de recibir sin error y en caso de recibir con error */
        }).then(data => {s.arreglo.push(s.newPost); s.newPost = {};}, error => console.error(error));
    }
}]);
