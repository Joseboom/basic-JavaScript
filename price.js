module.exports.price = (num) => {
    var coins = [{ val: 10, qty: 0 }, { val: 5, qty: 0 }, { val: 1, qty: 0 }];
    var input = num;
    for (let i = 0; i < coins.length; i++) {
        if (input >= coins[i].val) {
            coins[i].qty = Math.floor(input / coins[i].val);
            input = input % coins[i].val;
        }
    }
    return coins;
}
