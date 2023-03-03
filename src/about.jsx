import React from "react";
import s from './hero.module.css';

export default function About(){
    return(
        <div className={s.about}>
            <div className={s.wrapAb}>
                <img className={s.imgAb}  src='https://www.limboteams.com/assets/img/gallery/about-2.png'/>
                <div className={s.gridText}>
                    <h2>Porque Limbo?</h2>
                    <p>Comencemos lo que define el Limbo; Este se refiere cuando una persona está desconectada de la realidad que lo rodea o un lugar misterioso donde acontecen cosas inexplicables.. ¿Qué podría ser más misterioso que la programación y las personas que desarrolla? Ante el mundo donde todo parecía ser normal, llegaron los nómadas digitales a cambiar las perspectivas y mostrarnos que con su cabeza al revés y estando en el limbo pueden desarrollar páginas increíbles, aplicaciones dedicadas al usuario y su buena experiencia.</p>
                </div>
                <div className={s.gridText}>
                    <h2>Limboteams</h2>
                    <p>Nace con la intención de formar un equipo que crea fervientemente en el objetivo de sumar más personas en el limbo y quieran crear, organizar, desarrollar, diseñar, aprender, enseñar, amar esta pasión con la cual se inició este proyecto.</p>
                </div>
                <img  className={s.imgAb} src='https://www.limboteams.com/assets/img/gallery/about-1.png'/>
            </div>
            <div className={s.wave1}></div>
            <div className={s.line1}></div>
            <div className={s.wave2}></div>
        </div>
    )
}