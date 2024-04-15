import {useState} from 'react';

function Menu() {
    const [menus, setMenu] = useState(
        [
            {
                idmenu: 1,
                idkategori: 1,
                menu: "Bakso",
                gambar: "bakso.jpg",
                harga: 12000,
            },
            {
                idmenu: 2,
                idkategori: 2,
                menu: "Bebek madura",
                gambar: "bebek.jpeg",
                harga: 15000,
            },
            {
                idmenu: 3,
                idkategori: 3,
                menu: "Ayam geprek",
                gambar: "ayam.jpg",
                harga: 11000,
            },
            {
                idmenu: 4,
                idkategori: 4,
                menu: "Es Buah",
                gambar: "es buah.jpg",
                harga: 8000,
            },
            {
                idmenu: 5,
                idkategori: 5,
                menu: "Es Cendol",
                gambar: "es cendol.jpe",
                harga: 7000,
            }
        ]
    );
    return (
      <div className="App">
          <h1>Menu Restoran</h1>
          <div>
            {menus.map((data) => (
                <li key= {data.idmenu}>{data.menu} Rp. {data.harga}</li>
            ))}
          </div>
      </div>
    );
  }
  
  export default Menu;