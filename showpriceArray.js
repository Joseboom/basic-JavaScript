var coins = [10, 5, 1];
var input = 1536;
var show = 0;
// var ten = null;
for (let i = 0; i < coins.length; i++) {
    // console.log(coins[i]);
    // const element = array[i];
    if (input >= coins[i]) {
        show = Math.floor(input / coins[i])
        input = input % coins[i];
        console.log("เหรียญ " + coins[i] + " บาท ได้ " + show);


    }
    // for (let j = 0; j < show.length; j++) {
    //     // const element = array[j];
    //     if (j == 0) {
    //         console.log("เหรียญ 10 บาท ได้ " + show[j]);

    //     } if (j == 1) {
    //         console.log("เหรียญ 5 บาท ได้ " + show[j]);

    //     } if (j == 2) {
    //         console.log("เหรียญ 1 บาท ได้ " + show[j]);
    //     }

    // }

}
