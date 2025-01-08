import './assets/css/index.css';
import { LenguageProvider } from './context/LanguageContext';
import { Home } from './pages/Home';
import { MetaTags } from './components/common/MetaTags';

export const App = () => {

  return (   
    <LenguageProvider>
      <MetaTags />
      <Home />
    </LenguageProvider> 
  )
}


