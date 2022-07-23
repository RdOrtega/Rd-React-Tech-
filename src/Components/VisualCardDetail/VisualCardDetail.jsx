import React, { useContext } from 'react';
import './VisualCardDetail.css';

//IMPORT COMPONENTES DE LA PAGINA..........
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { IconButton } from "@mui/material";
import { DataContext } from "../../Components/DataContext/DataContext";
import toast, { Toaster } from 'react-hot-toast';



const VisualCardDetail = ({ data, cant }) => {


    //consumimos datos del Context.....
    const { AddToCart } = useContext(DataContext);

    //function add el producto al cart..............
    function onCart() {
        toast.success('Producto Agregado!');
        AddToCart(data, cant);
    }



    return (

        <div className='col-11 mx-auto detail-card my-4'>

            <section className="conteiner-fluid">
                <div className="row">
                    <div className="col-12 col-md col-img">
                        <img src={data.img} className="img-fluid img-detail" alt="..."></img>
                    </div>
                    <div className="col-11 mx-auto col-md mt-3 col-detail">
                        <div className='title-detail-card mx-auto'><h2>{data.marca}</h2></div>

                        <p className='card-text'><b>Modelo: </b> {data.modelo}.</p>
                        <p className="card-text"><b>Capacidad: </b> {data.capacidad}.</p>
                        <p className="card-text"><b>Categoria: </b> {data.categoria}.</p>
                        <p className="card-text"><b>Color: </b> {data.color}.</p>
                        <p className="card-text"><b>Stock: </b> {data.stock} Unidades.</p>
                        <span className="card-text"><b>Precio: </b> ${data.precio} pesos COL.</span>

                        <span className="conteiner-icon-cart">
                            <IconButton
                                color="success" aria-label="add to shopping cart"
                                onClick={onCart} >
                                <ShoppingCartCheckoutOutlinedIcon fontSize='large' />
                            </IconButton>
                        </span>
                    </div>
                </div>
            </section>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    )
}

export default VisualCardDetail;