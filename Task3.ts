import PromptSync = require("prompt-sync");
let prompt = PromptSync()
let ProductPrice = Number (prompt ("Product Price"));
let Discount = Number (prompt ("Product Discount %"));
let DisAmount = ProductPrice * Discount/100;
let FinalPrice = ProductPrice - DisAmount;
if (Discount >= 50) {
    console.log("percentage is invalid");
    
}  else  {
    console.log(("Product Price"), ProductPrice, ("Percent Discount"),Discount , ("Dicount Amount"),DisAmount , ("Final Price After Discount"), FinalPrice);
    
}
