// Show len HTML
const listSudenst=[
    {
        id:1,
        name:'Dao Hong Bon',
        gender:'nam',
        math_score:10,
        english_scoder:9,
        literature_score:10,
      

    },
    {
        id:2,
        name:'Vu Ngoc Hiep',
        gender:'nam',
        math_score:10,
        english_scoder:9,
        literature_score:1,
       
    },
    
];

const calAverage_score=(math_score,english_scoder,Literature_score)=>((math_score+english_scoder+Literature_score)/3).toFixed(2);
const renderListStudents=()=>{
let stringHTML='';
    for(let studenr of listSudenst){
        
        stringHTML +=`
        <tr>
            <th scope="row">${studenr.id}</th>
            <td>${studenr.name}</td>
            <td>${studenr.gender}</td>
            <td>${studenr.math_score}</td>
            <td>${studenr.english_scoder}</td>
            <td>${studenr.literature_score}</td>
            <td>${calAverage_score(studenr.math_score,studenr.english_scoder,studenr.literature_score)}</td>
            <td>
                <button class='btn btn-success'onclick='updateStudent(${studenr.id})'>Update</button>
                <button class='btn btn-danger' onclick='deleteStudent(${studenr.id})'>Delete</button>
            </td>
         </tr>
        `
    }
    document.getElementById('show'). innerHTML =stringHTML;
}



let maxId = listSudenst[listSudenst.length - 1].id;
// lay du lieu tu input vao bang
document.getElementById('btn-hienthi').addEventListener('click',function(e){
    const id = document.getElementById('id').value;
    const name=document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const math_score=document.getElementById('math').value;
    const english_scoder=document.getElementById('english').value;
    const literature_score=document.getElementById('literature').value;


    if (name.length < 2) {
        alert('Tên phải có ít nhất 2 ký tự');
        return;
    }
    if (isNaN(math_score) || math_score < 0 || math_score > 10) {
        alert('Điểm toán phải là một số từ 0 đến 10');
        return;
    }
    if (isNaN(english_scoder) || english_scoder < 0 || english_scoder > 10) {
        alert('Điểm tiếng Anh phải là một số từ 0 đến 10');
        return;
    }
    if (isNaN(literature_score) || literature_score < 0 || literature_score > 10) {
        alert('Điểm văn phải là một số từ 0 đến 10');
        return;
    }

    maxId += 1;
// Xác thực đầu vao của dữ liệu
    const newStudenr={
        id: maxId,
        name,
        gender,
        math_score:Number(math_score),
        english_scoder:Number(english_scoder),
        literature_score:Number(literature_score),
        
    }
    // hiện thi mang len bang
    listSudenst.push(newStudenr);
    renderListStudents();
});

document.getElementById('btn-remove').addEventListener('click', function() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.querySelector('input[name="gender"]:checked').value = '';
    document.getElementById('math').value = '';
    document.getElementById('english').value = '';
    document.getElementById('literature').value = '';
});

const deleteStudent=(id)=>{
    const index=listSudenst.findIndex((studenr)=>studenr.id===id)
    listSudenst.splice(index,1)
    renderListStudents();
}

//đổ dữ liệu lên các ô tương ứng

const updateStudent=(id)=>{
    const index=listSudenst.findIndex((studenr)=>studenr.id===id)
    const {id:id_update,name,gender,math_score,english_scoder,literature_score}=listSudenst[index];
    document.getElementById('id').value=id;
    document.getElementById('name').value=name;
    document.getElementById('gender').value=gender,
    document.getElementById('math').value=math_score,
    document.getElementById('english').value=english_scoder,
    document.getElementById('literature').value=literature_score
}

window.deleteStudent=deleteStudent;
window.updateStudent=updateStudent;
renderListStudents();