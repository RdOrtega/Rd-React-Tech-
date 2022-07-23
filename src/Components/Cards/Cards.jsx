import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';


function Cards({ data }) {

  return (

    <div className="card mb-2 mx-auto">

      <h4 className='name'>{data.marca}</h4>
      <img src={data.img} className="img-fluid img-card" alt="..."></img>
      <div className="mt-2">
        <span className='card-text'><b>Modelo: </b> {data.modelo}</span>
        <p className="card-price"><b className='card-text'>Precio: </b> ${data.precio} COL.</p>

        <Link to={`/detail/${data.id}`}>
        <span className='text-detail mb-2'>Mas detalles <b>&gt;</b></span>
        </Link>
      </div>
    </div >
  )
};

export default Cards;