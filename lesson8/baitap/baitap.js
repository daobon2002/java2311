// Câu 5

const a=[1,2,3,4,5,6,7,8,9]
let sum=0;
for(let i =0;i<a.length;i++){
    if(a[i] % 2 !==0){
        sum=sum+a[i]
    }
}
console.log('Cau 5')
console.log('tong le cua mang tren la:'+ sum)

// Cau 2

const s = ["mott1", "haii1", "bamm", "text", "namm1"];
const text = "text";

let min = s;
for (let i = 1; i < s.length; i++) {
  if (s[i].length < min.length) {
    min = s[i];
  }
}
console.log('Cau 2')
console.log("Chuỗi đầu tiên có độ dài nhỏ nhất trong mảng: " + min);

// -Tìm những chuỗi trong mảng có chứa giá trị text.
    let ab=[];
    for(let i=0;i<s.length;i++){
        if(s[i].includes(text)){
            ab.push(s[i])
        }
    }
    console.log("Các chuỗi trong mảng có chứa giá trị text : " + ab);


// -Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

let newS=[]
for(let i=0;i<s.length;i++){
    newS.push(s[i].substring(0,3))
}
console.log("Mảng newS: " + newS);

// Tạo chuỗi kết hợp các phần tử trong s, cách nhau bởi dấu '-'
let ac='';
for(let i=0;i<s.length;i++){
    ac=ac+s[i]
    if(i<s.length-1){
        ac=ac+"-"
    }
}

console.log('Chuỗi kết hợp các phần tử trong mảng: '+ac)


// câu 3


// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
let d1 = prompt("Nhập vào dãy số d1, mỗi số cách nhau bởi dấu ','");
let d2 = prompt("Nhập vào dãy số d2, mỗi số cách nhau bởi dấu ','");
console.log('cau 3')
console.log("Dãy số d1: ", d1);
console.log("Dãy số d2: ", d2);


let arr1 = d1.split(",");
let arr2 = d2.split(",");

// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
let allIncluded = true;

for (let i = 0; i < arr1.length; i++) {
  if (!arr2.includes(arr1[i])) {
    allIncluded = false;
    break;
  }
}

console.log("Tất cả các giá trị số trong d1 có nằm trong d2 không: ", allIncluded);

// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
let tong = arr1.reduce((acc, num) => acc + Number(num), 0);

let hasElementDivisible = false;

for (let i = 0; i < arr2.length; i++) {
  if (Number(arr2[i]) % tong === 0) {
    hasElementDivisible = true;
    break;
  }
}

console.log("Có phần tử trong d2 chia hết cho tổng của d1 không: ", hasElementDivisible);
// -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
let newArr = [];

for (let i = 0; i < arr2.length; i++) {
  let num2 = Number(arr2[i]);
  for (let j = 0; j < arr1.length; j++) {
    let num1 = Number(arr1[j]);
    if (num2 % num1 === 0) {
      newArr.push(num2);
      break;
    }
  }
}

console.log("Mảng mới gồm các số chia hết cho cả d2 và d1: ", newArr);
// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng
let mergedArr = [];
let i = 0; 
let j = 0; 

while (i < arr1.length && j < arr2.length) {
  let num1 = Number(arr1[i]);
  let num2 = Number(arr2[j]);

  if (num1 < num2) {
    mergedArr.push(num1);
    i++;
  } else {
    mergedArr.push(num2);
    j++;
  }
}
while (i < arr1.length) {
  mergedArr.push(Number(arr1[i]));
  i++;
}
while (j < arr2.length) {
  mergedArr.push(Number(arr2[j]));
  j++;
}

console.log("Dãy số theo thứ tự tăng dần: ", mergedArr);
//  dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort)
let result = [];

for (let i = 0; i < arr2.length; i++) {
  let num2 = parseInt(arr2[i]);
  for (let j = 0; j < arr1.length; j++) {
    let num1 = parseInt(arr1[j]);
    if (num2 % num1 === 0) {
      result.push(num2);
      break;
    }
  }
}

console.log("Mảng mới gồm các số chia hết cho 2 lần lượt trong d2 và d1: ", result);

// 6. Nhập vào 1 dãy số s. Mỗi số cách nhau bởi dấu “,”.
const s1 = prompt("Nhập vào dãy số s, mỗi số cách nhau bởi dấu ','");

// Chuyển đổi chuỗi thành mảng các số
const arr = s1.split(",").map(Number);
console.log('cau 6')
console.log(arr)

// -Tìm số đầu tiên trong dãy lớn hơn 5 và chia hết cho 2.
let number =null
for(let i=0;i<arr.length;i++){
   if(arr[i] >5 & arr[i] % 2==0){
    number=arr[i]
    break
   }
}
console.log('đầu tiên trong dãy lớn hơn 5 và chia hết cho 2: '+ number)
// -Tìm tất cả số lẻ trong dãy s .
let le=[]
for(let i=0;i<arr.length;i++){
    if(arr[i] %2 !=0){
        le.push(arr[i]);
    }
}
console.log('tất cả số lẻ trong dãy s :' +le)
// -Biến đổi dãy s thành dãy x mà các phần tử của dãy x là bình phương các phần tử của dãy s.
let x=[]
for(let i=0;i<arr.length;i++){
    x.push(arr[i] * arr[i]);
}
console.log("Dãy x với các phần tử là bình phương của dãy s: " + x);


//cau 1. Khai báo 1 mảng gồm các số bất kỳ. 
    const w=[5,4,8,7,9,6,2,3,5,4,11,22,55]
    console.log(' cau 1')
    console.log(w)


// -Tính tích của các phần tử trong mảng đó.
        let tich=1;
        for(let i=0;i<w.length;i++){
        tich=w[i]+tich
        }
        console.log('tich cua cac so',tich)
// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
        let min1=0
        for(let i=0;i<w.length;i++){
            if(w[i]%2==0 && arr[i] < min1){
                min1=w[i]
                
            }
            }
            console.log('nhỏ nhất mà chia hết cho 2 trong mảng: '+min1)
// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
        let max=0
        for(let i=0;i<w.length;i++){
            if(w[i]%3==0 && arr[i] > max){
                min1=w[i]
                
            }
            }
            console.log('lớn nhất mà chia hết cho 3 trong mảng: '+min1)

// Tính giá trị trung bình của mảng
        let tong1 = 0;
        for (let i = 0; i < w.length; i++) {
            tong1 += w[i];
        }
        const average = tong1 / w.length;
        console.log('Giá trị trung bình của mảng:', average);
// -Lọc ra các số nguyên tố trong mảng.
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
    const primeNumbers = w.filter((num) => isPrime(num));
    console.log('Các số nguyên tố trong mảng:', primeNumbers);
// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không
let hasNumberLessThan10 = false;
for (let i = 0; i < w.length; i++) {
  if (w[i] < 10) {
    hasNumberLessThan10 = true;
    break;
  }
}
console.log("Có số nhỏ hơn 10 trong mảng: ", hasNumberLessThan10);

// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không
let allNumbersGreaterThan20 = true;
for (let i = 0; i < w.length; i++) {
  if (w[i] < 20) {
    allNumbersGreaterThan20 = false;
    break;
  }
}
console.log('Tất cả phần tử trong mảng có lớn hơn 20:', allNumbersGreaterThan20);

// Nhập vào số n cho đến khi n là 1 số trong mảng s
let n = parseInt(prompt("Nhập vào số n:"));

while (!w.includes(n)) {
  n = parseInt(prompt("Nhập vào số n:"));
}

console.log("Số n đã được chọn từ mảng w:", n);
// Sử dụng thuật toán Bubble Sort để sắp xếp mảng theo thứ tự tăng dần
for (let i = 0; i < w.length - 1; i++) {
  for (let j = 0; j < w.length - i - 1; j++) {
    if (w[j] > w[j + 1]) {
      let temp = w[j];
      w[j] = w[j + 1];
      w[j + 1] = temp;
    }
  }
}
console.log("Mảng sau khi sắp xếp: "+ w);