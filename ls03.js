let array = [];
let n = parseFloat(prompt("Nhập số phần tử cho mảng: "));
let negativeCount = 0;

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
    array.push(num);
}

for (let i = 0; i < n; i++) {
    if (array[i] < 0) {
        negativeCount++;
    }
}

if( n === 0 ){
    alert("mảng ko có phần tử");
}else if(n < 0 ){
    alert("Số lượng phần tử không hợp lệ");
}else{
    alert(negativeCount);
}