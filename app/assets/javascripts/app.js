var app = angular.module('hP', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
      .when("/partial1", {
          templateUrl: "/partials/partial1.html",
          controller: "dogsController"
      })
      .when("/partial2", {
          templateUrl: "/partials/partial2.html",
          controller: "catsController"
      })
});

// Dogs Factory and Controller

app.factory("dogFactory", function($http){
  var factory = {};
  // For when I start to make query calls to the backend: Routes file has not been adjusted accordingly, nor has any backend controllers been made.
  factory.index = function(callback){
    $http.get("/dogs").success(function(output){
      callback(output);
    })
  }
  return factory;
})

app.controller("dogsController", function($scope, dogFactory){
  // Normally I would call the dogFactory's index method to render JSON.
  // dogFactory.index(function(json){
  //   $scope.dogs = json;
  // })

  // Mock JSON data
  $scope.dogs = [
      {name: "Dog Food", price: "20.99"},
      {name: "Dog Toy", price: "2.99"},
      {name: "Dog Bed", price: "10.99"},
      {name: "Dog Collar", price: "3.99"},
      {name: "Dog Leash", price: "1.99"},
      {name: "Squeaky Toy", price: "1.99"},
      {name: "Dog Treats", price: "7.99"},
      {name: "Dog Medicine", price: "30.99"}
  ]
})

// Cats Factory and Controller

app.factory("catFactory", function($http){
  var factory = {};
  // For when I start to make query calls to the backend.
  factory.index = function(callback){
    $http.get("/cats").success(function(output){
      callback(output);
    })
  }
  return factory;
})

app.controller("catsController", function($scope, catFactory){
  // Normally I would call the catFactory's index method to render JSON.
  // catFactory.index(function(json){
  //   $scope.cats = json;
  // })

  // Mock JSON data
  $scope.cats = [
      {name: "Cat Food", price: "18.99"},
      {name: "Cat Toy", price: ".99"},
      {name: "Cat Bed", price: "6.99"},
      {name: "Cat Collar", price: "2.99"},
      {name: "Cat Leash", price: "3.99"},
      {name: "Catnip Toy", price: "8.99"},
      {name: "Cat Treats", price: "7.99"},
      {name: "Cat Medicine", price: "40.99"}
  ]
})
