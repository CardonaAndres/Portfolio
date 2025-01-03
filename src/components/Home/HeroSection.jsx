import '../../assets/css/hero.css';
import fotoHV from '../../assets/imgs/FotoHV.jpg';
import { HeroBackground } from "../hero_section/HeroBackground";
import { HeroLeftColumn } from "../hero_section/HeroLeftColumn";
import { HeroRightColumn } from "../hero_section/HeroRightColumn";
import { useLenguage } from "../../context/LanguageContext";

export const HeroSection = () => {
  const { texts } = useLenguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroLeftColumn texts={texts} />
          <HeroRightColumn fotoHV={fotoHV} />
        </div>
      </div>
    </section>
  );
};
