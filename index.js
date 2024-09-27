// Write your solution in this file!
var customerName = "bob";
 function customerName (){
    return customerName
 }


 function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
 }


 
 function setBestCustomer(){
    var bestCustomer = 'not bob';
    window.bestCustomer = bestCustomer;
   return bestCustomer
 }


 function overwriteBestCustomer(){
    var bestCustomer = 'maybe bob';
    window.bestCustomer = bestCustomer;
 }

 
 const leastFavoriteCustomer = 'Ann';
 function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = 'Todd';
 }

changeLeastFavoriteCustomer();

