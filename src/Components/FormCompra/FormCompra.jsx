import React, { useState, useContext } from 'react';
import { DataContext } from '../DataContext/DataContext';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';


//IMPORT CONTEXT Y FIREBASE...............
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../fireBase/fireBaseConfig';



function FormCompra() {

    //add el documento con los productos del carrito para la facturacion............
    const { valorFinalPorProducto, cleanCart, cantidadItems } = useContext(DataContext);


    //formato initial del formulario...............
    const valorFactura = {
        Cantidad: `(${cantidadItems()}) U/d.`,
        Total: `$ ${valorFinalPorProducto()} Pesos COL.`,
        fecha: new Date(),
    };


    //estados del componente.................
    const [aceptar, setAceptar] = useState(false);
    const { register, handleSubmit } = useForm();



    //habilitamos el btn submit..........
    const ActivarBtn = () => {

        let check = document.getElementById('check').checked;
        if (check) {
            setAceptar(true);

        } else {
            setAceptar(false);
        }
    };

    // callback a firebase para hacer el envio del from......
    const sentDataBase = async (data, e) => {

        const docRef = await addDoc(collection(db, 'Compra'), {
            data, valorFactura
        });
        sweetAlert(docRef.id);
        cleanCart();
        e.target.reset();
    };


    // alerta para mostrar id de compra requerido........
    const sweetAlert = (id) => {
        swal({
            title: 'Gracias por tu compra!',
            text: `Su id de compra es: ${id}`,
            icon: 'success',
            timer: '3000',
        })
    }



    return (
        <>
            < section className='col col-md-10 mx-auto my-4 body-form  text-center' >

                <h6 className='col-11 my-5 mx-auto'>Porfavor complete el formulario, asi garantizaremos que su pedido se envie con exito!.. </h6>


                <form className="col-10 col-md-8 mx-auto my-3 g-3 text-start" onSubmit={handleSubmit(sentDataBase)}>

                    <div className="row mx-auto mt-2">
                        <label htmlFor="validationCustom01" className="form-label title-form">Nombre Completo:</label>
                        <input type="text" className="form-control" name='Nombre' {...register('Nombre')} required />

                    </div>
                    <div className="row mx-auto mt-2">
                        <label htmlFor="validationCustom02" className="form-label title-form">Correo:</label>
                        <input type="text" className="form-control" name='Correo'{...register('Correo')} />

                    </div>
                    <div className="row mx-auto mt-2">
                        <label htmlFor="validationCustom04" className="form-label title-form">Celular:</label>
                        <input type="text" className="form-control" name='Celular' {...register('Celular')} required />

                    </div>
                    <div className="row mx-auto mt-2">
                        <label htmlFor="validationCustom05" className="form-label title-form">Direccion:</label>
                        <input type="text" className="form-control" name='Direccion' {...register('Direccion')} required />

                    </div>
                    <div className="row mx-auto mt-2">
                        <label htmlFor="validationCustom03" className="form-label title-form">Ciudad:</label>
                        <input type="text" className="form-control" name='Ciudad' {...register('Ciudad')} required />

                    </div>
                    <div className="col-12 mt-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check" onChange={ActivarBtn} />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Terminos y Condiciones.
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btnTop text-center my-2 col-8 mx-auto" type="submit" disabled={!aceptar}>Enviar</button>
                    </div>
                </form>
            </section >
        </>
    )
}

export default FormCompra;