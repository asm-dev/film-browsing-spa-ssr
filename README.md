# Explorador de películas con routing SPA/SRR

Este proyecto consiste en una aplicación web que permite a los usuarios explorar una lista de películas populares, buscar películas por título y obtener detalles específicos de cada película. La aplicación se desarrolla en dos enfoques diferentes: SPA (Single Page Application) y SSR (Server Side Rendering), utilizando dos de las herramientas más populares en el ecosistema de desarrollo **React** y **Next.js**.

## Estructura

Cada carpeta contiene una implementación completa e independiente de la aplicación, proporcionando un entorno limpio y separado.

```
/react-spa
  ├── public/
  ├── src/
  ├── package.json
  └── README.md

/next-ssr
  ├── app/
  ├── public/
  ├── package.json
  └── README.md
```

## Funcionalidades Clave

- **Página de Inicio**: Muestra una lista de películas populares obtenidas de una API pública (The Movie Database API).
- **Página de Detalle de Película**: Proporciona información detallada como título, sinopsis, calificación, entre otros.
- **Búsqueda de Películas**: Permite a los usuarios buscar películas por título.
- **Navegación Fluida**: Transiciones rápidas y sin interrupciones entre las distintas secciones de la aplicación.


## ¿Qué interés tiene todo esto?

El desarrollo de esta aplicación en versiones SPA y SSR me ha permitido comparar dos métodos clave de creación de aplicaciones web modernas:

1. **Enrutamiento en SPA (Single Page Application)**:
   - En una SPA, como la versión de esta aplicación construida con React y React Router DOM, el enrutamiento se maneja completamente en el cliente. Esto significa que, una vez que se carga la página inicial, la navegación entre secciones ocurre de manera instantánea sin necesidad de recargar toda la página desde el servidor.
   - Este enfoque ofrece una experiencia de usuario muy fluida y rápida, ideal para aplicaciones donde la interacción constante y la inmediatez son esenciales.
   - El desafío en una SPA está en manejar correctamente la carga de datos dinámicos y asegurarse de que la aplicación sea amigable para los motores de búsqueda (SEO), lo que puede requerir soluciones adicionales.

2. **Enrutamiento en SSR (Server Side Rendering)**:
   - En el caso de la versión SSR, construida con Next.js, el contenido y las páginas se renderizan en el servidor antes de enviarse al cliente. Esto mejora el tiempo de carga inicial y garantiza que los motores de búsqueda puedan indexar fácilmente el contenido.
   - Next.js utiliza un sistema de enrutamiento basado en el directorio de archivos, lo que simplifica la estructuración de las rutas. En esta aplicación, cada página (inicio, detalle de película, búsqueda) se configura directamente como un archivo en el directorio `app/`, lo que hace que facilita la organización y el desarrollo.
   - Este enfoque es ideal para aplicaciones que priorizan el rendimiento y necesitan entregar contenido optimizado para distintos dispositivos y conexiones.
