let array = [];
let  check = 0;

for (let i = 0; i < 10; i++) {
    let numbers = +prompt("nhập phần tử là số nguyên cho mảng cho mảng: ");
    array.push(numbers);    
}
let str = "";
for (let i = 0; i <= 9; i++) {
    if (array[i]>= 10) {
        check++;
        str = str + array[i] + "" ;
    }
}
if (check > 0) {
    alert(str);
} else {
    alert("không có số nguyên nào lớn hơn 10!");
}