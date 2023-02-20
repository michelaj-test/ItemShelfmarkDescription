/*
 * Adding description after shelfmark filtered on shelfmark- test
 * mjm2022
 */

app.controller('DescriptionLocationItemController', ['angularLoad', function(angularLoad) {
  var vm = this;

  this.$onInit = function(){
    {
      /*
       * Get location shelfmark and filter it
       */

      vm.collItem = '';
      if ('callNumber' in vm.parentCtrl.loc.location) {
          var collocItem = vm.parentCtrl.loc.location.callNumber;
        if (collocItem.match(/ZAR/)) {
          vm.collItem = 'In deposito esterno, richiesta prenotazione.';
        }
      }
    }
  };
}]);


app.component('prmLocationItemAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'DescriptionLocationItemController',
  template: '<div ng-if="$ctrl.collItem"><small>{{$ctrl.collItem}}</small></div>'
})

