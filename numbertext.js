const aa = (number) => {

    var num = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
    var pos = ["หน่วย", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];
    var sum = "";
    var keynumber = number;
    for (let i = 0; i < keynumber.length; i++) {
        if (keynumber[i] !== 0) {
            sum = sum + num[parseInt(keynumber[i])]
            sum = sum + pos[keynumber.length - (i + 1)]
        }
        // const element = array[i];

    }
    sum = sum.replace("หนึ่งหน่วย", "เอ็ด");
    sum = sum.replace("หน่วย", "");
    sum = sum.replace("สองสิบ", "ยี่สิบ");
    sum = sum.replace("หนึ่งสิบ", "่สิบ");
    if (sum == "เอ็ด") {
        sum = "หนึ่ง"

    }

    console.log(sum);
}

bb = (n1, n2) => n1 + n2;

module.exports = {
    aa,
    bb
}


