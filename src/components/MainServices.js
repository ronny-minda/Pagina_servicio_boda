
import { Link } from 'react-router-dom';

import servicio from '../img/servicio2.jpg'

import { MainServices } from './styledComponents/Styled'



function Main() {

    return (
        <MainServices>
            <img src={ servicio } alt="servisio"></img>
            <section>
                <li>
                    <p><b>Servisio1</b></p>
                    <div>
                        <p>1hr</p>
                        <p>$150</p>
                    </div>
                    <Link href="#" >Reservar Ahora</Link>
                </li>
            </section>

            <section>
                <li>
                    <p><b>Servisio1</b></p>
                    <div>
                        <p>1hr</p>
                        <p>$150</p>
                    </div>
                    <Link href="#" >Reservar Ahora</Link>
                </li>
            </section>

            <section>
                <li>
                    <p><b>Servisio1</b></p>
                    <div>
                        <p>1hr</p>
                        <p>$150</p>
                    </div>
                    <Link href="#" >Reservar Ahora</Link>
                </li>
            </section>

            <section>
                <li>
                    <p><b>Servisio1</b></p>
                    <div>
                        <p>1hr</p>
                        <p>$150</p>
                    </div>
                    <Link href="#" >Reservar Ahora</Link>
                </li>
            </section>

            <section>
                <li>
                    <p><b>Servisio1</b></p>
                    <div>
                        <p>1hr</p>
                        <p>$150</p>
                    </div>
                    <Link href="#" >Reservar Ahora</Link>
                </li>
            </section>

            <section>
                <li>
                    <p><b>Servisio1</b></p>
                    <div>
                        <p>1hr</p>
                        <p>$150</p>
                    </div>
                    <Link href="#" >Reservar Ahora</Link>
                </li>
            </section>

            <section>
                <li>
                    <p><b>Servisio1</b></p>
                    <div>
                        <p>1hr</p>
                        <p>$150</p>
                    </div>
                    <Link href="#" >Reservar Ahora</Link>
                </li>
            </section>

            <section>
                <li>
                    <p><b>Servisio1</b></p>
                    <div>
                        <p>1hr</p>
                        <p>$150</p>
                    </div>
                    <Link href="#" >Reservar Ahora</Link>
                </li>
            </section>
        </MainServices>
    );
}
  
export default Main;