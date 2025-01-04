import { Navbar } from '../components/Home/Navbar';
import { HeroSection } from '../components/Home/HeroSection';
import { ProyectSection } from '../components/Home/ProyectSection';
import { SkilSection } from '../components/Home/SkillSection';
import { ContactSection } from '../components/Home/ContactSection';
import { FooterSection } from '../components/Home/FooterSection';
import { useLenguage } from '../context/LanguageContext';
import { WorkProcessSection } from '../components/Home/WorkProcessSection';

export const Home = () => {
  const { texts } = useLenguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-blue-900 dark:to-blue-800">
      
        <Navbar />
        <div id={texts.home}> 
          <HeroSection />
        </div>
        <div id={texts.projects}>
          <ProyectSection />
        </div>
        <div>
          <WorkProcessSection />
        </div>
        <div id={texts.skills}>
          <SkilSection />
        </div>      
        <div id={texts.contact}>
          <ContactSection />
        </div>

        <FooterSection />

    </div>
  );
};



