function checkOddInteger() {
    let result = prompt("Enter your Odd number");
    if(isNaN(result)){
        checkOddInteger();
    }else if (result % 2 == 0){
        checkOddInteger();
    }else if (result < 0){
        checkOddInteger();
    } else {
        alert("Số bạn nhập là: " + result);
    }
}
// 2. Kiểm tra N có là số nguyên tố
function checkPrime(){
    let number = +document.getElementById("number2").value;
    if(isPrime(number)){
        alert("Đây là số nguyên tố");
    } else {
        alert("Đây không phải số nguyên tố")
    }
}
function isPrime(number){
    if (number < 2){
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(number) ; i++) {
            if(number % i == 0){
                return false;
            }
        }
    }
    return true;
}
// 3. Hiển thị danh sách N số nguyên tố đầu tiên
function printPrime() {
    let number = document.getElementById("number3").value;
    let result = []
    let count = 0;
    let primeNum = 0;
    while (count < number) {
        if (isPrime(primeNum)){
            result.push(primeNum)
            count++;
        }
        primeNum++;
    }
    document.write(result);
}
// 4. Nhập vào mảng gồm N phần tử
let arr = [];
function addToArr(){
    let value = +document.getElementById("unit4").value;
    arr.push(value);
    document.getElementById("unit4").value = "";
    console.log(arr);
}
function resetArr() {
    arr = [];
    console.log(arr);
}
// 5. Hiển thị danh sách mảng vừa nhập ở 4
function printArray(){
    document.write(arr);
}
// 6. Liệt kê danh sách các số nguyên tố trong mảng vừa nhập
function printPrimeList() {
    // for (let i = 0; i < arr.length; i++) {
    //     if(isPrime(arr[i])){
    //         document.write(arr[i]+", ");
    //     }
    // }
    arr.forEach(item => {
        if (isPrime(item)) {
            document.write(item + ", ");
        }
    })
}
// 7. Kiểm tra N có tồn tại trong mảng vừa nhập, nếu có trả về vị trí của N trong mảng
function isInArray() {
    let saoPhaiChep = document.getElementById("unit7").value;
    if(arr.indexOf(saoPhaiChep) == -1){
        alert(saoPhaiChep + " không năm trong mảng");
    } else {
        alert(saoPhaiChep + " nằm tron mảng có index là " + arr.indexOf(saoPhaiChep));
    }
}
// 8. Xóa N khỏi mảng vừa
function deleteItemOfArray() {
    let value = document.getElementById("unit8").value;
    if(arr.indexOf(value) == -1){
        alert(value + " không năm trong mảng");
    } else {
        alert("Đã xóa " +value+" khỏi mảng");
        arr.splice(arr.indexOf(value),1);
    }
    console.log(arr);
}
// 9. Sắp xếp các phần tử của mảng vừa nhập ở 4 theo thứ tự tăng dần
function sortArray() {
    let temp = 0;
    if(arr.length == 0) {
        return;
    }
    else{
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if(arr[j] > arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    console.log(arr);
}
// 10. Nhập vào 1 số X, chèn X vào mảng sắp xếp ở bước 7 sao cho không làm thay đổi thứ tự sắp xếp của mảng
function addAndSort() {
    let number = +document.getElementById("unit10").value;
    arr.push(number);
    sortArray();
    document.getElementById("unit10").value = "";
}