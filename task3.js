"use strict";
exports.__esModule = true;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var ProductPrice = Number(prompt("Product Price"));
var Discount = Number(prompt("Product Discount %"));
var DisAmount = ProductPrice * Discount / 100;
var FinalPrice = ProductPrice - DisAmount;
if (Discount >= 50) {
    console.log("percentage is invalid");
}
else {
    console.log(("Product Price"), ProductPrice, ("Percent Discount"), Discount, ("Dicount Amount"), DisAmount, ("Final Price After Discount"), FinalPrice);
}
