import '../../assets/css/hero.css';
import fotoHV from '../../assets/imgs/FotoHV.webp';
import { HeroBackground } from "../heroSection/HeroBackground";
import { HeroLeftColumn } from "../heroSection/HeroLeftColumn";
import { HeroRightColumn } from "../heroSection/HeroRightColumn";
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
