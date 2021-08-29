
import mision from '../img/mision.jpg'

import { MainAbout } from './styledComponents/Styled'



function Main() {

    return (
        <MainAbout>
            <h2>Bodas y Eventos en Ecuador</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero id similique error iusto, tempore accusantium dicta! Sint, maxime iure? Sequi quasi laudantium iste ipsa consequuntur perspiciatis mollitia modi itaque.

            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero id similique error iusto, tempore accusantium dicta! Sint, maxime iure? Sequi quasi laudantium iste ipsa consequuntur perspiciatis mollitia modi itaque.

            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero id similique error iusto, tempore accusantium dicta! Sint, maxime iure? Sequi quasi laudantium iste ipsa consequuntur perspiciatis mollitia modi itaque.

            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero id similique error iusto, tempore accusantium dicta! Sint, maxime iure? Sequi quasi laudantium iste ipsa consequuntur perspiciatis mollitia modi itaque.
            </p>
            <section>
                <div>
                    <h3>Nuestra Visión</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero id similique error iusto, tempore accusantium dicta! Sint, maxime iure? Sequi quasi laudantium iste ipsa consequuntur perspiciatis mollitia modi itaque.
                    </p>

                    <h3>Nuestra Misión</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero id similique error iusto, tempore accusantium dicta! Sint, maxime iure? Sequi quasi laudantium iste ipsa consequuntur perspiciatis mollitia modi itaque.
                  </p>
                </div>
                <img src={ mision } alt=""></img>
            </section>
        </MainAbout>
    );
}
  
export default Main;