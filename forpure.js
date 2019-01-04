var jose = (count) => {
    var coins = [{val:10,qty:0}, 5, 1];
    var input = count;
    for (let i = 0; i < coins.length; i++) {
        // const element = array[index];
        if (input >= coins[i].val) {
            // console.log("เหรียญ " + coins[i].val + " บาท ได้ " + Math.floor(input / coins[i]));
            coins[i].qty =  Math.floor(input / coins[i].val);
            input = input % coins[i].val;
        }

    }
}
module.exports = {
    jose
}
