import { Navbar } from '../components/homeComponents/Navbar';
import { HeroSection } from '../components/homeComponents/HeroSection';
import { ProjectSection } from '../components/homeComponents/ProjectSection';
import { SkilSection } from '../components/homeComponents/SkillSection';
import { ContactSection } from '../components/homeComponents/ContactSection';
import { FooterSection } from '../components/homeComponents/FooterSection';
import { WorkProcessSection } from '../components/homeComponents/WorkProcessSection';
import { useLenguage } from '../context/LanguageContext';

export const Home = () => {
  const { texts } = useLenguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-blue-900 dark:to-blue-800">
      
        <Navbar />
        <div id={texts.home}> 
          <HeroSection />
        </div>
        <div id={texts.projects}>
          <ProjectSection />
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



