import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './IconCart.css';

//IMPORT COMPONENTES DE LA PAGINA..........
import { DataContext } from '../../Components/DataContext/DataContext';




function IconCart() {

    //consumo del DataContext...........
    const { cart, cantidadItems } = useContext(DataContext);


    return (
        <>
            <div className='col-1'>
                {<Link to='/ShoppingCart'>
                    <div className='conteiner-icon'>
                        <i className="bi bi-bag-heart"></i>
                        {cart.length === 0 ? null :
                            <div className='num-cart'>
                                {cantidadItems()}
                            </div>}
                    </div>
                </Link>}
            </div>
        </>
    )
}

export default IconCart;