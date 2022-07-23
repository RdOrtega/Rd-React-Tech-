import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import BtnNavbar from '../BtnNavbar/BtnNavbar';



function Header(props) {

    
    return (
        <div className='conteiner-fluid'>
            <div className='Header'>
                <BtnNavbar />
                <h1 className='tittle-header text-center pt-3'>{props.tittle}</h1>

                <section className='row mx-auto pb-3 w-75 text-center'>
                    <hr />
                    <div className="col-12 col-md-4 mt-2"><Link to='/products' className='link-header'>Productos</Link></div>
                    <div className="col-12 col-md-4 mt-2"><Link to='/' className='link-header'>Home~Rd.React</Link></div>
                    <div className="col-12 col-md-4 mt-2"><Link to='/about' className='link-header'>About</Link></div>
                </section>
            </div>
        </div >
    );
}

export default Header;