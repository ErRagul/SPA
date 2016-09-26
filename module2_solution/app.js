(function () {
    'use strict';
    angular
        .module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$injector = ['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService) {
        var vm = this;

        vm.items = ShoppingListCheckOffService.buyItems;

        vm.buyItem = function (item, index) {
            ShoppingListCheckOffService.itemToBuy(item.name, item.quantity, index);
        }
    }


    AlreadyBoughtController.$injector = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) { 
        var vm = this;
        
        vm.boughtItems = ShoppingListCheckOffService.boughtItems;
        
    }




    ShoppingListCheckOffService.$injector = []
    function ShoppingListCheckOffService() {

        var vm = this;

        vm.buyItems = [
            {
                name: 'Cookies',
                quantity: 10
            },
            {
                name: 'Corn nuts',
                quantity: 20
            },
            {
                name: 'Cheese puff',
                quantity: 30
            },
            {
                name: 'Cashew nut',
                quantity: 40
            }
        ];
        vm.boughtItems = [];

        vm.itemToBuy = function (itemName, itemQuantity, index) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            }
            vm.boughtItems.push(item);
            vm.buyItems.splice(index, 1);
        }

    }

})();
