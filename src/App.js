
import React from 'react';
import Header from './components/Header'
import MainHome from './components/MainHome'
import MainAbout from './components/MainAbout'
import MainServices from './components/MainServices'
import MainGalery from './components/MainGalery'
import MainContact from './components/MainContact'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { GlabalStyle } from './components/styledComponents/Styled'

function App() {
  return (
    <Router>
      <GlabalStyle/>

      <Header/>

      <Switch>

      <Route exact path="/">
        <MainHome/>
      </Route>  

      <Route exact path="/Pagina_servicio_boda/">
        <MainHome/>
      </Route>

      <Route exact path="/Pagina_servicio_boda/Home">
        <MainHome/>
      </Route>

      <Route exact path="/Pagina_servicio_boda/SobreNosotros">
        <MainAbout/>
      </Route>

      <Route exact path="/Pagina_servicio_boda/Servicios">
        <MainServices/>
      </Route>

      <Route exact path="/Pagina_servicio_boda/Galeria">
        <MainGalery/>
      </Route>

      <Route exact path="/Pagina_servicio_boda/Contacto">
        <MainContact/>
      </Route>
      

      </Switch>
      
      <Footer/>
      
    </Router>
  );
}

export default App;
