# JavaScript for me
## 1.สร้างไฟล์ JavaScript ขึ้นมาเช่น icansee.js 
    -ไฟล์ icansee.js ทำหน้าที่เรียกใช้ไฟล์อื่น โดยใช้คำสั่ง require เพื่อใช้เรียกไฟล์อื่น ๆ 
## 2.สร้างไฟล์ JavaScript อีกไฟล์ขึ้นมา เช่น pirce.js
    -เป็นไฟล์ที่มีไว้เพื่อ exports ไปใช้กับไฟล์ icansee.js 
    โดยภายในจะมีคำสั่ง module.exports เพื่อให้สามารถ export ไปใช้กับไฟล์อื่นที่ต้องการ 
    โดยการ exports มีสองรูปแบบ 
        1 เป็นแบบ Object 
         const aa = (test) => {
            }
            module.exports = {
            aa 
            }
        2 เป็นแบบ Property
            module.exports.price = (num) => {
                xxx
                return xxx;
            }

    "# basic-JavaScript" 
