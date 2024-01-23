// // // // const banthan={
// // // //     Ten:"Đào Hồng Bôn",
// // // //     Tuoi:21,
// // // //     Que:"Phu Xuyen-Ha Noi",
// // // //     Truong:'HUBT'

// // // // }
// // // // //truy xuât
// // // // console.log(banthan.Que)
// // // // //Thêm thuộc tính
// // // // banthan.gioitinh='Nam'
// // // // banthan.Ten="linh"
// // // // delete banthan.Tuoi
// // // // console.log(banthan)

// // // // for(let key in banthan){
// // // //     console.log(banthan[key])
// // // // }

// // // // const x = {name: "Alice"}
// // // // const y = {age: 20}
// // // // const z = Object.assign(x, y)
// // // // console.log(z) // {name: "Alice", age: 20}


// // // Quizzes
// // // 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.

// // function greet(name) {
// //     console.log("Hello world, " + name);
// //   }
// //   greet('Dao')
// // // 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
// // function tinh(a,b){
// //     let tong =(a+b)*2
// //     return tong

// // }

// // console.log(tinh(2,7))
// // // 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập


// const users = [
//   {
//     id: 1,
//     first_name: 'John',
//     last_name: 'Doe',
//     email: 'john.doe@example.com',
//     age: 45,
//     marital_status: 'married',
//     occupation: 'Developer'
//   },
//   {
//     id: 2,
//     first_name: 'Jane',
//     last_name: 'Smith',
//     email: 'jane.smith@example.com',
//     age: 55,
//     marital_status: 'single',
//     occupation: 'Doctor'
//   },
//   // ... các user khác
// ];

// // Tìm user có id bằng n
// function findUserById(n) {
//   const user = users.find(user => user.id === n);
//   return user ? user : 'User not found';
// }

// // Lấy email của các user có tên chứa keyword
// function getEmailsByKeyword(keyword) {
//   const filteredUsers = users.filter(user => `${user.first_name} ${user.last_name}`.toLowerCase().includes(keyword.toLowerCase()));
//   const emails = filteredUsers.map(user => user.email);
//   return emails;
// }

// // Đếm số lượng user có age > 50
// function countUsersOver50() {
//   const count = users.reduce((total, user) => {
//     if (user.age > 50) {
//       return total + 1;
//     }
//     return total;
//   }, 0);
//   return count;
// }

// // Đếm số lượng user đã kết hôn và chưa kết hôn
// function countMaritalStatus() {
//   const marriedCount = users.filter(user => user.marital_status === 'married').length;
//   const singleCount = users.filter(user => user.marital_status === 'single').length;
//   return { married: marriedCount, single: singleCount };
// }

// // Đếm số lượng user theo từng ngành nghề
// function countUsersByOccupation() {
//   const counts = {};
//   users.forEach(user => {
//     counts[user.occupation] = counts[user.occupation] ? counts[user.occupation] + 1 : 1;
//   });
//   return counts;
// }

// // Thực hiện các tác vụ
// const n = 1;
// console.log('User có id bằng ' + n + ':', findUserById(n));

// const keyword = 'doe';
// console.log('Email của các user có tên chứa keyword "' + keyword + '":', getEmailsByKeyword(keyword));

// console.log('Số lượng user có age > 50:', countUsersOver50());

// console.log('Số lượng user đã kết hôn và chưa kết hôn:', countMaritalStatus());

// console.log('Số lượng user theo từng ngành nghề:', countUsersByOccupation());

const storage = {
  name: 'Kho Hàng Giả',
  address: 'HN',
  owner: 'Dũng Tiến',
  items: [
    {
      id: 1,
      name: 'Sản phẩm 1',
      category: 'Nội thất',
      price: 20
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      category: 'Thiết bị',
      price: 110
    },
    {
      id: 3,
      name: 'Sản phẩm 3',
      category: 'Quần áo',
      price: 2
    },
  ]
};

function printItems(items) {
  console.log('Danh sách các mặt hàng:');
  items.forEach(item => {
    console.log(`- ID: ${item.id}, Tên: ${item.name}, Danh mục: ${item.category}, Giá: ${item.price}`);
  });
}

function updateStorageInfo() {
  console.log('Cập nhật thông tin kho hàng:');
  const newName = prompt('Nhập tên mới:');
  const newAddress = prompt('Nhập địa chỉ mới:');
  const newOwner = prompt('Nhập chủ sở hữu mới:');

  storage.name = newName;
  storage.address = newAddress;
  storage.owner = newOwner;

  console.log('Thông tin kho hàng đã được cập nhật:');
  console.log('Tên:', storage.name);
  console.log('Địa chỉ:', storage.address);
  console.log('Chủ sở hữu:', storage.owner);
}

function createItem() {
  console.log('Tạo một mặt hàng mới:');
  const newItemId = parseInt(prompt('Nhập ID mặt hàng:'));

  // Kiểm tra xem ID mặt hàng đã tồn tại chưa
  const existingItem = storage.items.find(item => item.id === newItemId);
  if (existingItem) {
    console.log('ID mặt hàng đã tồn tại. Vui lòng nhập một ID khác.');
    return;
  }

  const newItemName = prompt('Nhập tên mặt hàng:');
  const newItemCategory = prompt('Nhập danh mục mặt hàng:');
  const newItemPrice = parseFloat(prompt('Nhập giá mặt hàng:'));

  const newItem = {
    id: newItemId,
    name: newItemName,
    category: newItemCategory,
    price: newItemPrice
  };

  storage.items.push(newItem);

  console.log('Tạo mặt hàng mới thành công.');
  printItems(storage.items);
}

function searchItems() {
  console.log('Tìm kiếm các mặt hàng:');
  const searchKeyword = prompt('Nhập từ khóa tìm kiếm:');

  const matchingItems = storage.items.filter(item => item.name.includes(searchKeyword));

  if (matchingItems.length === 0) {
    console.log('Không tìm thấy mặt hàng phù hợp.');
  } else {
    console.log('Các mặt hàng phù hợp:');
    printItems(matchingItems);
  }
}

function deleteItem() {
  console.log('Xóa một mặt hàng:');
  const deleteItemId = parseInt(prompt('Nhập ID mặt hàng cần xóa:'));

  const itemIndex = storage.items.findIndex(item => item.id === deleteItemId);

  if (itemIndex === -1) {
    console.log('Không tìm thấy mặt hàng. Không thể xóa.');
    return;
  }

  storage.items.splice(itemIndex, 1);

  console.log('Xóa mặt hàng thành công.');
  printItems(storage.items);
}

function startProgram() {
  let action = '';

  while (action !== '0') {
    action = prompt('chọn (1: Cập nhật thông tin kho hàng, 2: Tạo mặt hàng, 3: Tìm kiếm mặt hàng, 4: Xóa mặt hàng, 0: Thoát chương trình):');

    switch(action) {
      case '1':
        updateStorageInfo();
        break;
      case '2':
        createItem();
        break;
      case '3':
        searchItems();
        break;
      case '4':
        deleteItem();
        break;
      case '0':
        console.log('Đang thoát chương trình.');
        break;
      default:
        console.log('Hành động không hợp lệ. VuiDưới đây là phiên bản của đoạn mã đã được dịch sang tiếng Việt:')
    }
  }
}

startProgram();