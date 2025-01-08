import { Helmet } from 'react-helmet-async';

export const MetaTags = () => {
  return (
    <Helmet>
        <title>Andrés Cardona - Full Stack Developer</title>
        <meta name="description" content="Hola, soy Andrés, un Desarrollador De Software apasionado por crear soluciones a los problemas del día a día. Explora mi portafolio para conocer mis proyectos, habilidades y experiencia." />
        <meta name="keywords" content="portafolio, Desarrollador De Software, desarrollador web, diseño, proyectos, Full Stack" />
        <meta name="author" content="Andrés Cardona" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mi Portafolio - Andrés Cardona" />
        <meta property="og:description" content="Descubre los proyectos y habilidades de Andrés, un desarrollador de software" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-cardonaandres-projects.vercel.app" />
        <meta property="og:image" content="https://portfolio-cardonaandres-projects.vercel.app" />
        <meta name="twitter:title" content="Mi Portafolio - Andrés Cardona" />
        <meta name="twitter:description" content="Hola, soy Andrés Cardona, un Desarrollador de Software apasionado por crear soluciones tecnológicas. Explora mi portafolio para conocer mis proyectos y habilidades." />
        <meta name="twitter:image" content="https://portfolio-cardonaandres-projects.vercel.app" />
    </Helmet>
  )
}


