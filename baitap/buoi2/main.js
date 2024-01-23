//cau 6
const arr=[1,54,6,7];
let newarr = arr.map(function(num){
    return num+5;
})
console.log('Cau6: Mảng newarr co gia tri la:', newarr);

//cau5
let arr1=[1,2,3,4,5,6];
let arr2=[1,6,8,9,0];
let newarr1=arr1.filter(Element=>arr2.includes(Element));
console.log('Cau 5: Phan tu trung lap cua hai mang tren la: ',newarr1);

// cau 8
let players = [
	{ id: 11, name: 'Messi', age: 33 },
	{ id: 12, name: 'Ronaldo', age: 34 },      
	{ id: 13, name: 'Young', age: 35 },        
	{ id: 14, name: 'Mane', age: 21 },          
	{ id: 15, name: 'Salah', age: 24 },
];
let pleyersModified = players.reduce((obj,player) => {
 obj[player.id]=player;
 return obj;
});
console.log ('Cau 8:',pleyersModified)

//Cau 7

let m = [1,2,4,5,6,7];
let n = [3,5,675,8,96];

let remove = [1, 8, 10, 96, 7];

let filterArray = (arr) => {
    return arr.filter(value=>remove.includes(value));
};
m = filterArray(m);
n = filterArray(n);

console.log('cau 7: ',m);
console.log('cau 7: ',n);

//Cau1

function reverseString(str){
    return str.split('').reverse().join('');
};
console.log('Cau1: chuoi da dao nguoc:',reverseString('abcdef'));

//Cau2
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log('Cau2:',removeDuplicates([1, 2, 3, 5, 4, 2, 6, 4]));
//Cau4
var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function addContact() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    if(name === "" || phone === "") {
        alert("Vui lòng nhập tên và số điện thoại.");
        return;
    }

    var contact = {
        name: name,
        phone: phone
    };

    contacts.push(contact);

    contacts.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    localStorage.setItem('contacts', JSON.stringify(contacts));

    updateContactList();
}

function searchContact() {
    var searchValue = document.getElementById('search').value;

    var searchResults = contacts.filter(function(contact) {
        return contact.name.includes(searchValue) || contact.phone.includes(searchValue);
    });

    displayContacts(searchResults);
}

function deleteDuplicates() {
    var uniqueContacts = [];
    var seenPhoneNumbers = new Set();

    for(var i = contacts.length - 1; i >= 0; i--) {
        if(!seenPhoneNumbers.has(contacts[i].phone)) {
            seenPhoneNumbers.add(contacts[i].phone);
            uniqueContacts.unshift(contacts[i]);
        }
    }

    contacts = uniqueContacts;
    localStorage.setItem('contacts', JSON.stringify(contacts));

    updateContactList();
}

function updateContactList() {
    var contactListDiv = document.getElementById('contact-list');
    contactListDiv.innerHTML = "";

    for(var i = 0; i < contacts.length; i++) {
        var contactDiv = document.createElement('div');
        contactDiv.textContent = contacts[i].name + ": " + contacts[i].phone;
        contactListDiv.appendChild(contactDiv);
    }
}