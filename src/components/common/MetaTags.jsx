import { Helmet } from 'react-helmet-async';

export const MetaTags = () => {
  return (
    <Helmet>
        {/* Título mejorado con estructura SEO */}
        <title>Andrés Cardona | Desarrollador Full Stack & Software Engineer</title>
        
        {/* Meta descripción optimizada (160 caracteres ) */}
        <meta name="description" content="Soy Andrés Cardona, un Desarrollador Full Stack especializado en crear soluciones tecnológicas eficientes. Explora mi portafolio y conoce mis proyectos y habilidades." 
        />
        
        {/* Keywords optimizadas (Google ya no les da tanta importancia, pero Bing sí) */}
        <meta name="keywords" content="Desarrollador Full Stack, Software Engineer, Desarrollo Web, JavaScript, React, Node.js, Programador, Proyectos de Software, Portfolio" />
        
        <meta name="author" content="Andrés Cardona" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Canonical para evitar contenido duplicado */}
        <link rel="canonical" href="https://portfolio-cardonaandres-projects.vercel.app" />

        {/* Open Graph para Facebook, WhatsApp y LinkedIn */}
        <meta property="og:title" content="Andrés Cardona | Desarrollador Full Stack & Software Engineer" />
        <meta property="og:description" content="Soy Andrés Cardona, desarrollador de software especializado en soluciones Full Stack. Conoce mis proyectos y habilidades en mi portafolio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-cardonaandres-projects.vercel.app" />
        <meta property="og:image" content="https://portfolio-cardonaandres-projects.vercel.app/FotoHV.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Andrés Cardona Portfolio" />

        {/* Twitter Cards para mejorar la vista previa en Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Andrés Cardona | Desarrollador Full Stack & Software Engineer" />
        <meta name="twitter:description" content="Soy Andrés Cardona, desarrollador de software especializado en soluciones Full Stack. Explora mi portafolio y conoce mis proyectos." />
        <meta name="twitter:image" content="https://portfolio-cardonaandres-projects.vercel.app/FotoHV.webp" />

        {/* Meta etiquetas adicionales para SEO técnico */}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
