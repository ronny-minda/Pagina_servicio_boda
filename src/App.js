
import Header from './components/Header'
import MainHome from './components/MainHome'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom';

import { GlabalStyle } from './components/styledComponents/Styled'

function App() {
  return (
    <BrowserRouter>
      <GlabalStyle/>
      <Header/>
      <MainHome/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
