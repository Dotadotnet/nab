// این ولیو مقدار پیش فرض و اولیه هستش زیاد توجه نکن از پنل میشه تغییرش داد

module.exports = [
    {
        key: "limitbuy",
        name: "حداقل خرید برای ارسال رایگان", value: "100000", type: "number"
    },
    {
        key: "pricesend",
        name: "هزینه ارسال", value: "100000", type: "number"
    },
    {
        key: "typefilds", 
        name: "نوع عناصر",
        value: "image , text , caption",
        type: "string" ,
        editeble : false
    },

];

// types => string , number

//  فیل کلید همیشه باید یونیک باشد !!!!