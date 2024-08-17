var x = 12;
var y = "11"; //
console.log(x != y);
console.log(x !== y); // true
y += 1; // y = y + 1;
var z = "12";
console.log(x == y); // 12 == "12"
y = "12";
console.log(x === y);
console.log(x < y);
console.log(x <= y);
console.log(x > y);
console.log(x >= y);
// 'a' > 'b' ACSII
console.log("String comparision: ", "a" > "A");
// A B C D ...... a b c d
var first_str = "Nguyen ";
var second_str = "Bao Huy";
var str = first_str + second_str;
console.log("Before changing: ", str); // Nguyen Bao Huy
str += "123456"; // ! str = str + "123456"
console.log("After changing: ", str);
// ! Bài tập: viết code minh họa khác cho các toán tử đã: toán tử toán, toán tử gán, toán so sánh
