myApp.controller('mainController', function($window,$location,$state,$rootScope) {
  var vm = this;

  vm.logout = function () {
    if (localStorage) {
      $window.localStorage.removeItem('login');
      $location.path('/login');
    }
  };


  // vm.todoData = [];

  vm.todoData = JSON.parse(localStorage.getItem('todo'));

  vm.addTodo = function () {

    if(vm.todoData == null ) {

      vm.todoData = [];

      vm.todoData.push({itemName: vm.itemName, itemDesp: vm.itemDesp});
      console.log(vm.todoData);

      localStorage.setItem('todo', JSON.stringify(vm.todoData));
      console.log(localStorage);
    }else{

      vm.todoData.push({itemName: vm.itemName, itemDesp: vm.itemDesp});
      console.log(vm.todoData);

      localStorage.setItem('todo', JSON.stringify(vm.todoData));
      console.log(localStorage);
    }

    vm.todos = JSON.parse(localStorage.getItem('todo'));
  };

  vm.todos = JSON.parse(localStorage.getItem('todo'));
  console.log(vm.todos);

  vm.itemDelete = function ($index) {
    vm.todos.splice($index,1);
    window.localStorage.setItem('todo',JSON.stringify(vm.todos));
  };

  vm.updateDelete = function ($index) {
    $state.go('update');
    $rootScope.updateData = vm.todos[$index];
    console.log($index);
    $rootScope.id = $index
  };
});
