
import { MainGallery } from './styledComponents/Styled'

import galeria2 from '../img/galeria2.jpg'
import galeria3 from '../img/galeria3.jpg'
import galeria4 from '../img/galeria4.jpg'
import galeria5 from '../img/galeria5.jpg'

import galeria6 from '../img/galeria6.jpg'
import galeria7 from '../img/galeria7.jpg'


function Main() {

    return (
        <MainGallery>
            <div>
                <h2>Galeria</h2>
            </div>
            <section>
                <img src={ galeria2 } alt="galeria"></img>
                <img src={ galeria3 } alt="galeria"></img>
            </section>

            <section>
                <img src={ galeria4 } alt="galeria"></img>
                <img src={ galeria5 } alt="galeria"></img>
            </section>

            <section>
                <img src={ galeria6 } alt="galeria"></img>
                <img src={ galeria7 } alt="galeria"></img>
            </section>
        </MainGallery>
    );
}
  
export default Main;