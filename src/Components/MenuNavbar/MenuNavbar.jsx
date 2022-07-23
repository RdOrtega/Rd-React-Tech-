import React from 'react';
import { Link } from 'react-router-dom';
import "./MenuNavbar.css";


//import de los logos de mi page......
import logo2 from '../../Img/Logos/logo-marca.png';
import logo1 from '../../Img/Logos/logo-Rd.png';



const MenuNavbar = () => {

    return (

        <div className='MenuNavbar text-center'>

            <img src={logo1} className='logo1' alt="logo" />

            <section className='links-MenuNavbar'>
                <Link to='/marca/LENOVO' className='links'>Lenovo</Link>
                <Link to='/marca/HUAWEI' className='links'>Huawei</Link>
                <Link to='/marca/ACER' className='links'>Acer</Link>
                <Link to='/marca/SAMSUNG' className='links'>Samsung</Link>
                <Link to='/marca/APPLE' className='links'>Apple</Link>
            </section>
            <img src={logo2} className="logo2" alt="logo" />
        </div>
    );
};

export default MenuNavbar;

