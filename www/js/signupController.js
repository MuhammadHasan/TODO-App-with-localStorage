myApp.controller('signupController', function($scope,$state) {
  var vm = this;
//  vm.signupData = {firstName : vm.firstName ,secondName: vm.lastName ,Email: vm.email};

  vm.signupData = JSON.parse(localStorage.getItem('signup'));

  vm.signup = function () {
    if(vm.signupData == null ) {

      vm.signupData = [];

      vm.signupData.push({firstName : vm.firstName ,secondName: vm.lastName ,Email: vm.email});
      console.log(vm.signupData);

      localStorage.setItem('signup', JSON.stringify(vm.signupData));
      console.log(localStorage);
      $state.go('login');
    }
    else {
      vm.signupData.push({firstName : vm.firstName ,secondName: vm.lastName ,Email: vm.email});
      console.log(vm.signupData);

      localStorage.setItem('signup', JSON.stringify(vm.signupData));
      console.log(localStorage);
      $state.go('login');
    }
  };
});
