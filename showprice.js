module.exports.show = (price) => {
    var tenmod = null;
    var tenshow = null;
    var fivemod = null;
    var fiveshow = null;
    var oneshow = null;
    var key = price;

    tenshow = Math.floor(key / 10);
    tenmod = key % 10

    // console.log("แรกเหรียญ 10 บาทได้ " + tenshow + " เหรียญ");
    if (tenmod >= 1) {
        fiveshow = Math.floor(tenmod / 5);
        fivemod = tenmod % 5
        // console.log("แลกเหรียญ 5 บาทได้ " + fiveshow + " เหรียญ");

    } if (fivemod >= 1) {
        oneshow = fivemod / 1;
        // console.log("แลกเหรียญ 1 บาทได้ " + oneshow + " เหรียญ");
    }


    return [{val:10,qty:tenshow}, {val:5,qty:fiveshow}, {val:1,qty:oneshow}];
}

