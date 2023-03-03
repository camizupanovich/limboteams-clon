import React from "react";
import img from './heroImg.png';
import s from './hero.module.css';
export default function Hero(){
    return(
        <div className={s.gridCont}>
            <div className={s.heroCont}>
                <h1 className={s.title}>Limboteams,<br/>Passion for software.</h1>
                <p className={s.desc}>Mediante nuestra propuesta integral, nuestros desarrolladores encuentran un lugar de optimo crecimiento. Convirtiendonos en el complemento ideal para alcanzar el 100% sus funcionabilidades.</p>
                <button className={s.btn}>Ver mas</button>
            </div>
            <img src={img} alt='Limboteams' className={s.img}/>
        </div>
    )
}