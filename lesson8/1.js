//mang ko co phan tu
const list=[];
console.log('list:',list)
// cach thay bao phan tu
const listname=[1,2,3,4,5,6,7,8,9,10,12,13,15,1611,716]
console.log('list:',listname)
// truy xuất dữ liệu 
const a=[1,2,3,4,5,6,7,8,9]
console.log(a[5])
console.log(a[3])
console.log(a[10])

// update
const b=[1,2,3,4,5,6,7,8,9]
b[0]=10
console.log(b)
b[10]=10
console.log(b)
//thêm 1 phân tử

const c=[1,2,3,4,5]
console.log(c)
// them vao cuoi
c.push(6)
console.log(c)
c.push(7,8,9)
console.log(c)
// them vao dau
c.unshift(-10)
console.log(c)
c.unshift(-20,-30)
console.log(c)

// xoa1 phan tu trong mang
// xoa cuoi chi so dc 1 lam trong mang
c.pop()
console.log(c)
// xoa dau chi so dc 1 lam trong mang
c.shift()
console.log(c)
//xoa vi tri bat ky so dau laf vi tri cua phan tu, so hai la so luong xoa

c.splice(5,3)
console.log(c)

// them trong splice so dau la vi tri cua phan tu, so hai la so luong xoa,ba la them vao 
c.splice(3,0,5,8)
console.log(c)

// bai tap
const numbers=[10,4,-7,9,100,3,-21,0,33]
console.log(numbers)
//tim so nho nhat
let min=Math.min(...numbers)
console.log('so nho nhat:',min)
//tim so lon nhat
let max=Math.max(...numbers)
console.log('so lon nhat',max)
//tinh tong
 let sum=0;
for(let i=0;i<numbers.length;i++){
    sum=numbers[i]+sum
}
console.log('tinh tong',sum)
//tinh trung binh cong
const avg= sum/numbers.length;
console.log('trung binh cong:',avg)

//phan tu dau tien chia het cho ba
for(let number of numbers){
    if(number%3==0){
        console.log('phan tu dau tien chia het cho ba', number)
        break;
    }
}
// 

for(let number of numbers){
    let count=0;
    for(let i=1;i<=number;i++){
        if(number%i==0){
            count++
        } if(number==2){
            console.log('la so nguyen to')

        }

    }
}

    // de bai:
        // Khai báo 1 mảng gồm các số bất kỳ. 
        // -Tính tích của các phần tử trong mảng đó.
        let tich=1;
        for(let i=0;i<numbers.length;i++){
        tich=numbers[i]+tich
        }
        console.log('tich cua cac so',tich)
        //  -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng. 
        
        //  -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
        //  -Tính giá trị trung bình của mảng.
        //  -Lọc ra các số nguyên tố trong mảng. 
        //  -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không. 
        //  -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
        //  -Nhập vào số n cho đến khi n là 1 số trong mảng s. 
        //  -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)

        

        

      
        

       
