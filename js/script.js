$(document).ready(function(){
    $(".tablehead").click(function(){
        $(this).next("div").slideToggle("slow");
    });
});

function invoice() {


var size = document.querySelector('input[name="size"]:checked').value; console.log("size="+size);
var sizePrice = 0;
if (size === "Small") {
    sizePrice = 4;
};
if (size === "Medium") {
    sizePrice = 6;
};
if (size === "Large") {
    sizePrice = 12;
};console.log("sizePrice="+sizePrice);
