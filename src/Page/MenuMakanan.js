import React, {Component} from 'react';
import DaftarMakanan from '../Lib/DaftarMakanan';
import Header from './Header';

class MenuMakanan extends Component {
  render() {
    return(
      <div>
        <Header />
        <h3><center>Daftar Makanan Favourite</center></h3>
        <table style={{width:'100%'}}>
          <tbody>
            <tr>
              {DaftarMakanan.map((data, index) => {
                return(
                  <td key={index}>
                    <center>
                      <img
                        src={data.img}
                        alt="Product Makanan"
                        width='150'
                        height='150'
                      />
                      <p>{data.NamaMakanan}</p>
                      <p>Harga : Rp. {data.Harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default MenuMakanan;
