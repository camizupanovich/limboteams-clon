import Card from "./card";
import Hero from "./hero";
import Nav from "./nav";
import s from './hero.module.css'
import About from "./about";

function App() {
//  var ancho = window.innerWidth;
//  console.log(ancho);
let cards = [
  {id:1,img:require('./feature-1.png'),title:'Valores',description:'Loss valores de una comunidad son aquellos criterios que comparten y ponen en práctica los miembros de una sociedad. Este tipo de valores nos sirven para convivir de forma respetuosa y en sintonía entre todos los miembros que componen el equipo.'},
  {id:2,img:require('./feature-2.png'),title:'Misión',description:'Nuestra misión es que nuestros desarrolladores, diseñadores, equipo de managers y más, encuentren un lugar de óptimo crecimiento y seamos un medio donde quieran participar, aprender y sumar esa experiencia a nuevos integrantes.'},
  {id:3,img:require('./feature-3.png'),title:'Visión',description:'Nuestra visión es proporcionar las herramientas necesarias para ese aprendizaje y mediante la ejecución de proyectos guiado por equipo experimentado a nuevos integrantes.'}
]
  return (
    <>
      <Nav/>
      <Hero/>
      <h2 className={`${s.title} ${s.center}`}>Nuestra comunidad</h2>
      <div className={s.wrap}>
      {cards.map(c=>
        <Card key={c.id}
        img={c.img}
        title={c.title}
        description={c.description}/>)}
      </div>
      <br/>
      <br/>
      <About/>
      <br/>
      <br/>
      <h2 className={`${s.title} ${s.center}`}>Nuestra agencia</h2>
      <img src='https://www.limboteams.com/assets/img/gallery/testimonial-bg.png'/>
      <div className={s.team}>
        <p className={s.texteam}>Limboteams nace para sacar adelante proyectos que están en el limbo y que aún no son tangibles, proyectos que suman al cliente para ver su idea plasmada en realidad.</p>
      <img src='https://www.limboteams.com/assets/img/gallery/people.png'/></div>
    </>
  );
}

export default App;
