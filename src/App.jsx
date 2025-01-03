import './assets/css/index.css';
import { LenguageProvider } from './context/LanguageContext';
import { Home } from './pages/Home';

function App() {

  return (   
    <LenguageProvider>   
      <Home />
    </LenguageProvider> 
  )
}

export default App
