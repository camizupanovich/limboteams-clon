import React from "react";
import logo from './logo.png';
import s from './nav.module.css';

export default function Nav(){
    return(
        <div className={s.container}>
            <img src={logo} alt='logo' width='180px'/>
            <div>
                <a className={s.navItems}> Inicio</a>
                <a className={s.navItems}>Nosotros</a>
                <a className={s.navItems}>Se parte de nuestro team</a>
            </div>
            <button className={s.btn}>Contáctanos</button>
        </div>
    )
}