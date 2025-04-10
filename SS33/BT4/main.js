const products = [
  {
    id: 1,
    name: 'Laptop Dell XPS 15',
    price: 35990000,
    image: 'https://techcare.vn/image/dell-xps-13-4n8gth8.jpg',
    description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 32990000,
    image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
    description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    price: 28990000,
    image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
    description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
  },
  {
    id: 4,
    name: 'Tai nghe Sony WH-1000XM5',
    price: 7990000,
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf',
    description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 11990000,
    image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
    description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
  },
  {
    id: 6,
    name: 'Loa JBL Charge 5',
    price: 3990000,
    image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
    description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
  },
];


const product = document.getElementById('product');

function display() {
  products.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '200px';
    card.style.height = '300px';

    card.innerHTML = `
      <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 150px; object-fit: cover;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <p class="card-text fw-bold text-dark">${item.price.toLocaleString('vi-VN')}₫</p>
        <a href="#" class="btn btn-primary mt-auto" style="width:60px;">buy</a>
      </div>
    `;

    product.appendChild(card);
  });
}

display();