
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';

import { GlabalStyle } from './components/styledComponents/Styled'

function App() {
  return (
    <BrowserRouter>
      <GlabalStyle/>
      <Header/>
    </BrowserRouter>
  );
}

export default App;
