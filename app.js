// Storage Controller

//Item Controller
const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const data = {
    item: [
      { id: 0, name: "Stake Dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 2, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };
  //Public Metods
  return {
    logData: function () {
      return data;
    },
  };
})();

//UI Controler
const UICtrl = (function () {
  //Public Metods
  return {};
})();

//App Controler
const App = (function (ItemCtrl, UICtrl) {
  //Public Metods
  return {
    init: function () {
      console.log("aq");
    },
  };
})(ItemCtrl, UICtrl);

//Initialize App
App.init();
