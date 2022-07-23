import React from 'react';
import MenuNavbar from "../MenuNavbar/MenuNavbar";
import './BtnNavbar.css';


function BtnNavbar() {

    //cambiar css del btn.....
    const btn = () => {
        document.querySelector('.icon').classList.toggle("open");
        document.querySelector(".MenuNavbar").classList.toggle('active');
    }

    return (
        <>
            <div onClick={btn} className="icon nav-icon-1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <MenuNavbar />
        </>

    )
}

export default BtnNavbar;