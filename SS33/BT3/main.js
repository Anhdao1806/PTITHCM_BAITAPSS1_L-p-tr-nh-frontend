let dish = [
  { name: 'Rau sạch', category: 'Đồ ăn' },
  { name: 'Thịt lợn', category: 'Đồ ăn' },
  { name: 'Pepsi không calo', category: 'Nước' },
  { name: 'Cocacola', category: 'Nước' },
  { name: 'Cờ lê', category: 'Dụng cụ' },
  { name: 'Tuy vít', category: 'Dụng cụ' }
];


function check() {
  const list = document.getElementById('list'); 
  list.innerHTML = ""; 

  let choose = document.getElementById('choose').value;

  let arr = dish.filter(va => choose == va.category);

  arr.forEach(item => {
      let li = document.createElement('li');
      li.innerHTML = `<b>Tên đồ ăn: </b> ${item.name} - <b>Danh mục: </b> ${item.category}`;
      list.appendChild(li);
      
      
  });
}