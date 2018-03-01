(function (window) {
  "use stric";
  var FORM_SELECTOR = "[data-coffee-order='form']";
  var PAYMENT_SELECTOR = "[payment-order='pay']";
  var CHECKLIST_SELECTOR = "[data-coffee-order='checklist']";
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList; //pg280?
  var myTruck = new Truck("ncc-1701", new DataStore());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);
  var formHandlerPay = new FormHandler(PAYMENT_SELECTOR);

  formHandler.addSubmitHandler(function (data){
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);

    formHandlerPay.addPaymentSubmit(PAYMENT_SELECTOR);
    console.log(formHandlerPay);
  });
})(window);