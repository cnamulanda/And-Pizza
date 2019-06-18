$(document).ready(function(){
    $(".tablehead").click(function(){
        $(this).next("div").slideToggle("slow");
    });
});

function invoice() {


var size = document.querySelector('input[name="size"]:checked').value; 
console.log("size="+size);
var sizePrice = 0;
if (size === "Small") {
    sizePrice = 4;
};
if (size === "Medium") {
    sizePrice = 6;
};
if (size === "Large") {
    sizePrice = 12;
    console.log("sizePrice="+sizePrice);
};

var cheese=document.querySelector('input[name="cheese"]:checked').value;
console.log("cheese"=+cheese);
if (cheese==="Extra cheese") {
    cheeseprice=2;
};
if (cheese==="regular cheese") {
    cheeseprice=1;
    console.log("cheeseprice="+cheeseprice);
};
var size=document.querySelector('input[name="crust"]:checked').value;
console.log("crust"=+crust);
if (crust=="plain crust")
plaincrustprice=20;
console.log("crustprice="+crustprice);
if (crust==="Garlic butter crust") {
    Garlicbutterprice=30;
    console.log("Garlicbutterprice="+Garlicbutterprice);
}
var totalPrice = (crustPrice + cheesePrice + sizePrice); console.log("totalPrice="+totalPrice);
};
