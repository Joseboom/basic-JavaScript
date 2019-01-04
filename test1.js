// var xx = require("./numbertext");
//  var yy = xx.bb(1,9);
//  console.log(yy)

// var uu = require("./forpure");
// uu.jose(1527);

var showPrice = require("./showprice");
var xx = showPrice.show(172);
xx.forEach((coin) => {
    console.log("แลกเหรียญ " + coin.val + " บาทได้ " + coin.qty + " เหรียญ");
})