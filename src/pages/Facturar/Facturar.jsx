import React from 'react';
import './Facturar.css';

//IMPORT COMPONENTES DE LA PAGINA..........
import Header from '../../Components/Header/Header';
import IconCart from '../../Components/IconCart/IconCart';
import FormCompra from '../../Components/FormCompra/FormCompra';


const Facturar = () => {



    return (

        <div className='conteiner-fluid body-facturar pb-4'>
            <Header tittle="Finalizar Compra" />

            <span className='icon-cart'>
                <IconCart />
            </span>
            <FormCompra />
        </div >
    )
}

export default Facturar;