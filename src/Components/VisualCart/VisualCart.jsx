import { useContext, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';


//import maetrial................
import swal from 'sweetalert';
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function VisualCart({ data }) {

    //consumimos el COntext y add unos estados.....
    const { deleteToCart, AddToCart } = useContext(DataContext);
    const [count, setCount] = useState(data.cant);
    let newCant;
    let subTotal = (data.precio * count);


    //fonction para incrementar la cantidad del producto...
    const incrementar = () => {

        if (count < data.stock) {
            newCant = count + 1;
            onCart(newCant);

        } else {
            swal({
                title: 'Upss',
                text: 'No existen mas unidades por el momento!',
                icon: 'info',
                timer: '2000'
            })
        }
    };

    //fonction para decrementar la cantidad del producto...
    const decrementar = () => {

        if (count > 1) {
            newCant = count - 1;
            onCart(newCant);

        } else {
            swal({
                title: 'Upss',
                text: 'El minimo es una (1) unidad!!',
                icon: 'error',
                timer: '2000'
            })
        }
    };

    
    //aqui le damos un nuevo estado al carrito y lo reemplazamos en el cart original..... 
    function onCart(newCant) {
        setCount(newCant);
        AddToCart(data, newCant);
    }


    //alerta al remover un item del cart.............
    const sweetAlertDelete = () => {

        swal({
            title: 'Eliminar!',
            text: 'Quieres sacar el item del carrito?',
            icon: 'warning',
            buttons: ['No', 'Si'],

        }).then((res) => {
            if (res) {
                deleteToCart(data.id);
                swal({
                    text: 'Producto fuera del carrito..',
                    icon: 'success',
                    timer: '1500',
                });
            }
        })
    }


    return (

        <tr>
            <td data-label='Stock'>{data.stock} / Ud</td>
            <td data-label='Imagen' className='d-none d-md-block'>
                <img src={data.img} className="img-fluid rounded" width={70} alt="..."></img>
            </td>
            <td data-label='Marca'>{data.marca}</td>

            <td data-label='Cantida'>
                <IconButton color="error" variant="string" onClick={decrementar}>
                    -
                </IconButton>
                <span>{count}</span>
                <IconButton color="success" onClick={incrementar}>
                    +
                </IconButton>
            </td>
            <td data-label='Precio'>${data.precio} COL</td>
            <td data-label='Quitar'>
                <IconButton onClick={() => sweetAlertDelete()} color='error' aria-label="delete">
                    <HighlightOffIcon />
                </IconButton>
            </td>
            <td data-label='Subtotal'>${subTotal} COL</td>
        </tr>
    )
}

export default VisualCart;