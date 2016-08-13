myApp.controller('loginController', function($scope,$state) {
  var vm = this;

  // vm.login = function () {
  //   if (vm.firstName !== '' && vm.lastName !== '') {
  //     vm.local = JSON.parse(localStorage.getItem('signup'));
  //     console.log(vm.local.firstName);
  //     if(vm.local.firstName === vm.firstName && vm.local.secondName === vm.lastName ){
  //       $state.go('main');
  //     }
  //   }
  // }

  vm.login = function () {
    vm.loginData = {firstName : vm.firstName ,secondName: vm.lastName};

    if (vm.firstName !== '' && vm.lastName !== '') {
      vm.local = JSON.parse(localStorage.getItem('signup'));
      //console.log(vm.local.firstName);

        for (var i = 0; i < vm.local.length; i++) {
          if (vm.local[i].firstName === vm.firstName && vm.local[i].secondName === vm.lastName) {
            console.log(vm.local[i].firstName + ' ' + vm.local[i].secondName);
            vm.loginData = {firstName: vm.firstName, secondName: vm.lastName};
            localStorage.setItem('login', JSON.stringify(vm.loginData));
            $state.go('main');
          }
          else {
            vm.myvalue = true;
          }
        }
    }
  }
});
