// Video18- Tối ưu hóa if else
let day = '';
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
    break;
    case 1:
        day = "Monday";
    break;
    case 2:
        day = "Tuesday";
    break;
    case 3:
        day = "Wednesday";
    break;
    case 4:
        day = "Thursday";
    break;
    case 5:
        day = "Friday";
    break;
    case 6:
        day = "Saturday";
}

console.log ('check day:', day)

//BT: Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple" (Tạo câu lệnh cảnh báo "Xin chào" nếu fruits là chuối và "Chào mừng" nếu fruits là táo)

switch(fruits) {
    case "Banana":
        alert("Hello")
        break;
    case "Apple":
        alert("Welcom")
        break;    
}