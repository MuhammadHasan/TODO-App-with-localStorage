myApp.controller('updateController', function($window,$location,$rootScope) {
  var vm = this;
  vm.todos = JSON.parse(localStorage.getItem('todo'));

  vm.update_Data = $rootScope.updateData;
  console.log(vm.update_Data);

  vm.id = $rootScope.id;
  //vm.todoData = [];

  vm.updateTodo = function (itemName,itemDesp) {

    vm.data = {itemName : itemName ,itemDesp: itemDesp };
    console.log(vm.data);

    vm.todos.splice( vm.id, 1, vm.data );
    window.localStorage.setItem('todo',JSON.stringify(vm.todos));
    console.log(vm.todos);

  };

});
