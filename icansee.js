var test = require("./price").price(10);
// console.log(test);
// for (let i = 0; i < test.length; i++) {
//     console.log("เหรียญ " + test[i].val + " บาท ได้ " + test[i].qty + " เหรียญ");
// }
test.forEach((num) => {
    console.log("เหรียญ " + num.val + " บาท ได้ " + num.qty + " เหรียญ");
})