
import { Link } from 'react-router-dom';

import { MainHome, CartAticulo } from './styledComponents/Styled'

import pareja from '../img/pareja.jpg'
import servicio from '../img/servicio.jpg'
import galeria from '../img/galeria.jpeg';
import about from '../img/about.jpg';

function Main() {

    return (
        <MainHome>
            <section className="presentacion">
                

                <img src={ pareja } alt="Pareja"></img>

                
                
                <div>
                    <h1>Bodas y Eventos en Ecuador</h1>
                    <p>
                    Somos los Mejores Organizadores de Bodas y Eventos en Ecuador; con dieciséis años en el mercado nacional; por lo tanto ratifican nuestra especialidad: eventos con clase, alimentación de calidad, servicio de primera, decoración innovadora; conjunto de detalles que hacen de un evento único y espectacular.
                    <br></br>
                    Solicita tu cotización personalizada para tu Boda ó Evento en: Quito, Guayaquil, Cuenca, Manta, Ambato, Santo Domingo de los Tsáchilas, Ibarra, Riobamba, Esmeraldas; además de otras ciudades a nivel nacional.
                    <br></br>
                    Con servicio por todo el país con diez y seis años; los cuales ratifican nuestra especialidad: eventos con clase, alimentación de calidad, servicio de primera, decoración innovadora; conjunto de detalles que hacen de un evento único y espectacular.
                    <br></br>
                    Contamos con el mejor servicio de Catering; Coffee Breaks, Cóctel, Brunch, Desayunos, Almuerzos, Cenas y más!
                    </p>
                </div>
            </section>
            <section>
                <CartAticulo className="articulo">
                    
                    <div>
                        <h2>Servicios</h2>
                        <p>
                        Somos expertos en Organización de Bodas y Eventos Espectaculares en Ecuador, ademas Conozca más acerca de nuestros clientes; los cuales ratifican la calidad y eficiencia de Humadi Bodas y Eventos Espectaculares.
                        <br></br>
                        Brindamos servicio a todo el país con más de diez y seis años en el mercado nacional; los cuales ratifican nuestra especialidad en: Eventos con clase, alimentación de calidad, servicio de primera, decoración innovadora; conjunto de detalles que hacen de un evento único y espectacular.
                        </p>
                        <Link to="/Pagina_servicio_boda/Servicios">Ver servicios</Link>
                    </div>
                    
                    <img src={ servicio } alt="Pareja"></img>
                </CartAticulo>

                <CartAticulo className="articulo">
                    
                    <img src={ galeria } alt="galeria"></img>

                    <div>
                        <h2>Galeria</h2>
                        <p>
                        Con servicio por todo el país con diez y seis años; los cuales ratifican nuestra especialidad: eventos con clase, alimentación de calidad, servicio de primera, decoración innovadora; conjunto de detalles que hacen de un evento único y espectacular.
                        </p>
                        <Link to="/Pagina_servicio_boda/Galeria">Ver galeria</Link>
                    </div>
                    
                    
                </CartAticulo>

                <CartAticulo className="articulo">
                    
                    <div>
                        <h2>Sobre Nosotros</h2>
                        <p>
                        Somos los Mejores Organizadores de Bodas y Eventos en Ecuador; con dieciséis años en el mercado nacional; por lo tanto ratifican nuestra especialidad: eventos con clase, alimentación de calidad, servicio de primera, decoración innovadora; conjunto de detalles que hacen de un evento único y espectacular.
                        </p>
                        <Link to="/Pagina_servicio_boda/SobreNosotros">Sobre nosotros</Link>
                    </div>
                    
                    <img src={ about } alt="Pareja"></img>
                </CartAticulo>
            </section>
        </MainHome>
    );
}
  
export default Main;