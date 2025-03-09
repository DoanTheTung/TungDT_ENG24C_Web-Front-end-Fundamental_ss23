let array = [];
let max = 0;
let maxIndex = 0;

for (let i = 0; i < 10; i++) {
    let numbers = +prompt("mời nhập số nguyên là phần tử của mảng để kiểm tra: ");
    if (array.includes(numbers)) {
        alert("Số này đã tồn tại, vui lòng nhập số khác!");
    } else {
        array.push(numbers);
    }
}
for (let i = 0; i < 10; i++) {
    if (array[i] > max) {
        max = array[i];
        maxIndex = i;
    }
}
alert("số lớn nhất trong mảng là: " +max+ " ở vị trí: "+maxIndex);