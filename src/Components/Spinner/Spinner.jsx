import React from 'react';
import './Spinner.css';


const Spinner = () => {

    return (
        <div className='conteiner-fluid body'> 
            <div className="loading">
                <div className="arc"></div>
                <div className="arc"></div>
                <div className="arc"></div>
            </div>
        </div>
    )
}

export default Spinner;