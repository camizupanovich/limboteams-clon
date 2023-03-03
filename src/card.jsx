import React from "react";
import s from './hero.module.css';

export default function Card({img,title,description}){
    return(
        <div className={s.card}>
            <img className={s.cardImg} src={img}/>
            <p className={s.cardTitle}>{title}</p>
            <p className={s.cardDescription}>{description}</p>
        </div>
    )
}