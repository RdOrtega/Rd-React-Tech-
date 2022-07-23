import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ShoopingCart.css';

//import componentes.................
import Header from '../../Components/Header/Header';
import VisualCart from '../../Components/VisualCart/VisualCart';
import { DataContext } from '../../Components/DataContext/DataContext';


//import material...............
import { Button } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';




function ShoppinCart() {

  const { cart, cleanCart, valorFinalPorProducto } = useContext(DataContext);


  return (

    <div className='conteiner-fluid'>

      <Header tittle="Shopping Cart" />

      <div className='col-11 mx-auto'>

        {cart.length === 0 ?

          (
            <div className='row mx-auto text-center fw-bold mt-5'>
              <h4>No hay ningun articulo en el carrito, animate agrega algo!</h4>
            </div>) :

          (
            <table className="table mt-5">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th className='d-none d-md-block'>Imagen</th>
                  <th>Marca</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>QUITAR</th>
                  <th>Sub.Total</th>
                </tr>
              </thead>

              {cart.map((item) => (
                <tbody  className='body-table' key={item.id}>
                  <VisualCart data={item} />
                </tbody>
              ))}

              <tfoot>
                <tr>
                  <td  colSpan="3"></td>
                  <td>
                    <Button onClick={cleanCart} variant="outlined" color='error' startIcon={<DeleteForeverOutlinedIcon />}>
                      Vaciar!
                    </Button>
                  </td>
                  <td>
                    {<Link to='/facturar'>
                      <Button variant="contained" color="success" startIcon={<CurrencyExchangeOutlinedIcon />}>
                        Facturar
                      </Button>
                    </Link>}
                  </td>
                  <td colSpan="2"><b>Total:</b> ${valorFinalPorProducto()} Pesos COL.</td>
                </tr>
              </tfoot>
            </table>)}
      </div>
    </div>

  )
}

export default ShoppinCart;