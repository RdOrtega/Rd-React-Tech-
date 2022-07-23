import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='conteiner-fluid'>
            <div className="row w-100 footer">
                <span className='col-2 text-start'><a className='link-redes' href="https://www.instagram.com/neburortega/"><i className="bi bi-instagram"></i> Instagram</a></span>
                <span className='col-1 text-start'><a className='link-redes' href="https://www.facebook.com/RdOrtega04/"><i className="bi bi-meta"></i> Meta</a></span>
                <span className='col-7 text-center'>By: Rd.React Tech © 2022 | Copyright: ALL RIGHTS RESERVED</span>
                <span className='col-2 text-end'>Cel: 3187049177</span>
            </div>
        </div>
    )
}

export default Footer;