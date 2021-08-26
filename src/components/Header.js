import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styledComponents/Styled'

import logo from '../ico/boda.svg'

function NavBar() {

  const [estado, setEstado] = useState({
    general: 'header Home',
    boton: 'btn',
    clipPath: 0
  })

  function home() {
    console.log('Home!!');
    setEstado ({
      general: 'header Home',
      boton: estado.boton,
      clipPath: estado.clipPath
    })

    estado.boton === 'btn change'? 
    setEstado ({
      general: 'header Home',
      boton: 'btn',
      clipPath: 0
    })
    :
    setEstado ({
      general: 'header Home',
      boton: 'btn change',
      clipPath: 142
    })

  }

  function about() {
    console.log('about!!'+estado.general);
    setEstado ({
      general: 'header About',
      boton: estado.boton,
      clipPath: estado.clipPath
    })

    estado.boton === 'btn change'? 
    setEstado ({
      general: 'header About',
      boton: 'btn',
      clipPath: 0
    })
    :
    setEstado ({
      general: 'header About',
      boton: 'btn change',
      clipPath: 142
    })

  }

  function services() {
    console.log('services!!'+estado.general);
    setEstado ({
      general: 'header Services',
      boton: estado.boton,
      clipPath: estado.clipPath
    })

    estado.boton === 'btn change'? 
    setEstado ({
      general: 'header Services',
      boton: 'btn',
      clipPath: 0
    })
    :
    setEstado ({
      general: 'header Services',
      boton: 'btn change',
      clipPath: 142
    })

  }

  function galery() {
    console.log('galery!!'+estado.general);
    setEstado ({
      general: 'header Galery',
      boton: estado.boton,
      clipPath: estado.clipPath
    })

    estado.boton === 'btn change'? 
    setEstado ({
      general: 'header Galery',
      boton: 'btn',
      clipPath: 0
    })
    :
    setEstado ({
      general: 'header Galery',
      boton: 'btn change',
      clipPath: 142
    })

  }

  function contact() {
    console.log('contact!!'+estado.general);
    setEstado ({
      general: 'header Contact',
      boton: estado.boton,
      clipPath: estado.clipPath
    })

    estado.boton === 'btn change'? 
    setEstado ({
      general: 'header Contact',
      boton: 'btn',
      clipPath: 0
    })
    :
    setEstado ({
      general: 'header Contact',
      boton: 'btn change',
      clipPath: 142
    })

  }

  function boton() {
    console.log('boton!!!'+estado.boton);

    // setEstado ({
    //   general: estado.general,
    //   boton: estado.boton,
    //   clipPath: 142
    // })

    estado.boton === 'btn change'? 
    setEstado ({
      general: estado.general,
      boton: 'btn',
      clipPath: 0
    })
    :
    setEstado ({
      general: estado.general,
      boton: 'btn change',
      clipPath: 142
    })

  }

    return (
      <Header clipPath={ estado.clipPath } className={ estado.general }>

        

        <Link className="logo" to="#">
          <img src={ logo } alt="Logo"></img>
          <span>Sitio Boda</span>
        </Link>
        
        <nav>
          <li>
            <Link to="#" className="home" onClick={home}>
              Home
            </Link>
          </li>


          <li>
            <Link to="#" className="about" onClick={about}>
              About
            </Link>
          </li>



          <li>
            <Link to="#" className="services" onClick={services}>
              Services
            </Link>
          </li>



          <li>
            <Link to="#" className="galery" onClick={galery}>
              Galery
            </Link>
          </li>



          <li>
            <Link to="#" className="contact" onClick={contact}>
              Contact
            </Link>
          </li>
        </nav>

        <div className={ estado.boton } onClick={ boton }>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

      </Header>
    );
  }
  
  export default NavBar;
  