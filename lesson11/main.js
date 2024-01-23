// // lưu thông tin từ localStorage
// // const number=100;
// // localStorage.setItem('Number',number)
// // localStorage.trainingCenter=T3H;
// // console.log(number)

// // const trainingCenter= localStorage.getItem('training')
// // console.log('trainingCenter:' , trainingCenter)

// // // const student={
// // //     name: " nguyen van a",
// // //     age:18,
// // // }
// // // localStorage.setItem('st',student)
// // //  console.log()
 
// //  localStorage.setItem('Number',200)
// //  localStorage.setItem('number',100)
// // //  localStorage.trainingCenter("number",'ho tung mau')
// //  localStorage.clear();

// //tạo cookie
// // document.cookie='username=T3H;expires=Sun,14,Jan 2024, 18:35 UTC'
// // document.cookie='bon=bon;max-age=100'
// // document.cookie='username=T3H;expires=Sun,14,Jan 2024, 6:50 UTC'
// // // lay du lieu tu cookie
// // // du lieu cua mot key
// // console.log(document.cookie.split(';'));
// // const dataCookie=document.cookie
// // console.log(dataCookie[9].split('='));

// // console.log(location.href)
// //tu dong chuyen trag
// // location.href='https://www.youtube.com/'
// // console.log(location.hostname)
// // location.hostname
// // console.log(location.pathname)
// // console.log(location.search)
// // console.log(location.hash)

// // history.back();
// // history.replaceState({page:1})
// // window.onpopstate=function(envent){
// //     alert('thoat',e.state);

// // }
// // let number=100
// // window.number=100
// // console.log('window.number:',window.number)
// const pi=10;
// let number=20
// console.log(pi)
// console.log(number)

// try{
// pi=15
// number=100
// }catch(a){
//     console.log('loi',a)
// }
// console.log(number)
// console.log(pi)



//Neu co gia tri chuyen vao thi se uu tien gia tri chuyen vao neu ko co gia tri chuyen vao thi no se lay gia tri undefined
function sum(number1,number2=0,number3=0){
    const sum=number1+number2+number3;
    console.log('gia tri number 1', number1);
    console.log('gia tri number 2', number2);
    console.log('gia tri number 3', number3);
    console.log('tong cua 3 so la:',sum)
}
sum(1,2)

// `${name}` dung de noi chuoi vaf co the dung de tao chuoi nhieu dong

const name='t3h'
const greeting=`hello, ${name}!`
console.log(greeting)
//tao 1 dong
const multipleString='dong1'
const multip=`dong1
dong2
dong3`
console.log(multipleString)
console.log(multip)

// lay gia trij truc tiep tu bien
const course1="HTML"
const course2='css'
const course3='js'

console.log(`ban dang tham gia khoa hoc ${course1}, ${course2} va ${course3}`)


const a=5
const b=7
console.log(`tong cac so ${a} va ${b} la ${a+b}`)

const person={
    pname:'bon',
    age:22,
};
//laay gia tri
const { pname,age}=person;

// lay gia tri ma 

const{pname:personname,age:personage}=person

console.log(personage)
console.log(personname)

// const key='mykey';
// var obj={};
// obj[key]='value'

// const obj={
//     [key]: 'value',
// }

const count=(a,b)=>{
    return a+b;
}
console.log(count(3,6))