do {
    var hotdog = (prompt("How many hotdogs would you like to order?"));
    var hotdog_quant = parseInt(hotdog);
    if (isNaN(hotdog) || hotdog != hotdog_quant) {
        alert("Enter a valid quantity");
    }
    
} 
    
while(isNaN(hotdog) || hotdog != hotdog_quant);
if (hotdog != 0) {
    hotdog = hotdog.replace(/[^0-9]+/g, '');
}

do {
    var fries = (prompt("How many french fries would you like to order?"));
    var fries_quant = parseInt(fries);
    if (isNaN(fries) || fries != fries_quant) {
    alert("Enter a valid quantity");
    }
    
} 

while(isNaN(fries) || fries != fries_quant);
if (fries != 0) {
    fries = fries.replace(/[^0-9]+/g, '');
}

do {
    var drinks = (prompt("How many drinks would you like to order?"));
    var drinks_quant = parseInt(drinks);
    if (isNaN(drinks) || drinks != drinks_quant) {
    alert("Enter a valid quantity");
    }
} 

while(isNaN(drinks) || drinks != drinks_quant);
if (drinks != 0) {
    drinks = drinks.replace(/[^0-9]+/g, '');
}

if (hotdog < 0) {
    hotdog = 0;
}

if (fries < 0) {
    fries = 0;
}

if (drinks < 0) {
    drinks = 0;
}

var hotdog_price = 3.25;
var fries_price = 2.00;
var drinks_price = 1.50;

var total_hotdog_price = (hotdog * hotdog_price)
var total_fries_price = (fries * fries_price)
var total_drinks_price = (drinks * drinks_price)

var subtotal = total_hotdog_price + total_fries_price + total_drinks_price;

var subtotal_discount = subtotal * 0.9;

var tax_discount = 0.0625 * subtotal_discount;
var tax = 0.0625 * subtotal;

var total_discount = tax_discount + subtotal_discount;
var total = tax + subtotal;

document.writeln("<br>Complete Order</br>");

document.writeln("<br>" + hotdog_quant + " Hotdogs  ($" + hotdog_price + " each) ..... $" + total_hotdog_price.toFixed(2));

document.writeln("<br>" + fries_quant + " French Fries  ($" + fries_price.toFixed(2) + " each) ..... $" + total_fries_price.toFixed(2));

document.writeln("<br>" + drinks_quant + " Drinks  ($" + drinks_price.toFixed(2) + " each) ..... $" + total_drinks_price.toFixed(2));

document.writeln("<br> </br>");


if (subtotal.toFixed(2) >= 20.00) {
    document.writeln("<br>Your order qualifies for a 10% discount! The discount is automatically applied.");
    document.writeln("<br>Order Subtotal: $" + subtotal_discount.toFixed(2));
    document.writeln("<br>Order Tax: $" + tax_discount.toFixed(2));
    document.writeln("<br> </br>");
    document.writeln("<br>Order Total: $" + total_discount.toFixed(2));
}
else {
    document.writeln("<br>Order Subtotal: $" + subtotal.toFixed(2));
    document.writeln("<br>Order Tax: $" + tax.toFixed(2));
    document.writeln("<br> </br>");
    document.writeln("<br>Order Total: $" + total.toFixed(2));
}