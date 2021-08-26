import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styledComponents/Styled'

import logo from '../ico/boda.svg'

function NavBar() {

  const [estado, setEstado] = useState({
    general: 'header About'
  })

  function home() {
    console.log('Home!!');
    setEstado ({
      general: 'header Home'
    })
  }

  function about() {
    console.log('about!!'+estado.general);
    setEstado ({
      general: 'header About'
    })
  }

  function services() {
    console.log('services!!'+estado.general);
    setEstado ({
      general: 'header Services'
    })
  }

  function galery() {
    console.log('galery!!'+estado.general);
    setEstado ({
      general: 'header Galery'
    })
  }

  function contact() {
    console.log('contact!!'+estado.general);
    setEstado ({
      general: 'header Contact'
    })
  }

    return (
      <Header className={ estado.general }>

        <span>
          <img src={ logo } alt="Logo"></img>
          <span>Sitio Boda</span>
        </span>
        
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

      </Header>
    );
  }
  
  export default NavBar;
  