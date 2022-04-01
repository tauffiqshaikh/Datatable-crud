function preventBack() {
  window.history.forward(); 
}
setTimeout("preventBack()", 0);
window.onunload = function () { null };

const PostData = async()=>{
  const formData = readFormData();
  const {name, website, phone, address, city , state, country} = formData;
  const res = await fetch('http://localhost:3001/api/company',{
    method : "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      name, website, phone, address, city, state, country
    })
  })

  const response = await res.json();
  console.log(response);
}

const DeleteData = async()=>{
  await fetch('http://localhost:3001/api/company',
  {method:"DELETE"})
}

var selectedRow = null

function onFormSubmit(){
PostData();
var formData = readFormData();
if(selectedRow == null)
  insertNewRecord(formData);
else 
  updateRecord(formData)

resetForm();
}

function readFormData(){
  var formData = {};
  formData['name'] = document.getElementById('name').value;
  formData['website'] = document.getElementById('website').value;
  formData['phone'] = document.getElementById('phone').value;
  formData['address'] = document.getElementById('address').value;
  formData['city'] = document.getElementById('city').value;
  formData['state'] = document.getElementById('state').value;
  formData['country'] = document.getElementById('country').value;
  return formData;
}

function insertNewRecord(data){
  var table = document.getElementById('myTable').getElementsByTagName('tbody')[0] ;
  var tr = table.insertRow(table.rows.length);
  var td1 = tr.insertCell(0);
  td1.innerHTML = data.name;
  var td2 = tr.insertCell(1);
  td2.innerHTML = data.website;
  var td3 = tr.insertCell(2);
  td3.innerHTML = data.phone;
  var td4 = tr.insertCell(3);
  td4.innerHTML = data.address;
  var td5 = tr.insertCell(4);
  td5.innerHTML = data.city;
  var td6 = tr.insertCell(5);
  td6.innerHTML = data.state;
  var td7 = tr.insertCell(6);
  td7.innerHTML = data.country;
  var td8 = tr.insertCell(7);
  td8.innerHTML = "<button onClick ='onEdit(this); window.scrollTo(0,document.body.scrollHeight);' class='btn btn-warning' >Edit</button>&nbsp<button onClick ='onDelete(this)' class='btn btn-danger' >Delete</button>";
}

const onEdit=(td)=>{
  selectedRow = td.parentElement.parentElement;
  document.getElementById('name').value = selectedRow.cells[0].innerHTML
  document.getElementById('website').value = selectedRow.cells[1].innerHTML
  document.getElementById('phone').value = selectedRow.cells[2].innerHTML
  document.getElementById('address').value = selectedRow.cells[3].innerHTML
  document.getElementById('city').value = selectedRow.cells[4].innerHTML
  document.getElementById('state').value = selectedRow.cells[5].innerHTML
  document.getElementById('country').value = selectedRow.cells[6].innerHTML
}

const updateRecord=(formData)=>{
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.website;
  selectedRow.cells[2].innerHTML = formData.phone;
  selectedRow.cells[3].innerHTML = formData.address;
  selectedRow.cells[4].innerHTML = formData.city;
  selectedRow.cells[5].innerHTML = formData.state;
  selectedRow.cells[6].innerHTML = formData.country;
}

const resetForm=()=>{
  document.getElementById('name').value = '';
  document.getElementById('website').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';
  document.getElementById('country').value = '';
  document.getElementById('edit').value = '';
  selectedRow = null
}

const onDelete = (td) => {
if(confirm("Are you sure you want to delete this record?")){
  row = td.parentElement.parentElement;
  document.getElementById('myTable').deleteRow(row.rowIndex);
  resetForm();
}
}