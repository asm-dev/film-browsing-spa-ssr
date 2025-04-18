# Movie Explorer SPA/SSR

Este proyecto es una aplicación web que permite a los usuarios explorar una lista de películas populares, buscarlas por título y ver información detallada de cada una. La app está implementada en dos versiones distintas: **SPA (Aplicación de Página Única)** usando React, y **SSR (Renderizado en el Servidor)** usando Next.js.

![image](https://github.com/user-attachments/assets/d2cb9720-903d-48d9-a2ec-3f1e71180e81)

## Estructura

Cada aplicación tiene su propio directorio: `/react-app-spa` y `/next-ssr`. Además, hay un espacio compartido llamado `/shared`, que contiene componentes reutilizables, servicios, tipos y datos simulados, lo que fomenta la reutilización de código y la escalabilidad.

## Funcionalidades principales

- **Página de inicio**: muestra una lista de películas populares obtenidas desde una API pública (The Movie Database API).
- **Página de detalle de película**: presenta información detallada como título, sinopsis, puntuación, fecha de estreno, entre otros datos.
- **Función de búsqueda**: permite buscar películas por título y ver los resultados relevantes al instante.
- **Modo de datos simulados**: la app incluye un modo con datos simulados para que se pueda explorar sin necesidad de una clave de API válida de TMDb. Esto es muy útil para entornos de desarrollo o pruebas.
- **Manejo de errores**: incluye límites de error amigables para el usuario y pantallas de respaldo. Por ejemplo, si la clave de la API falta o no es válida, la app muestra un mensaje claro y permite cambiar al modo de datos simulados con un solo clic.
- **Biblioteca de componentes compartidos**: tanto la versión SPA como la SSR utilizan el mismo espacio compartido `shared`, donde se definen y reutilizan componentes de UI, servicios, tipos y lógica simulada. Esto evita duplicaciones y asegura coherencia en ambos entornos.
- **Arquitectura Monorepo**: el proyecto está estructurado como un monorepo usando [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces), con aplicaciones separadas para la SPA en React (`/react-app-spa`) y la SSR en Next.js (`/next-ssr`), además de un paquete compartido (`/shared`) que encapsula toda la lógica reutilizable.
  -- **Diseño de Componentes Atómicos**: al desarrollar una app, organizar los componentes es esencial para su mantenimiento y escalabilidad. Uno de los enfoques más usados es la estructura de carpetas atómica, que utilizamos para alojar nuestros componentes React compartidos.

## ¿Por qué es interesante todo esto?

Al desarrollar esta aplicación en versiones SPA y SSR, podemos comparar mejor los dos enfoques principales del desarrollo web moderno:

### Enrutamiento en SPA

- El enrutamiento del lado del cliente se gestiona con React Router.
- Navegación rápida y fluida sin recargar la página.
- El SEO y el rendimiento de carga inicial requieren configuraciones adicionales.
- Ideal para aplicaciones dinámicas e interactivas.

### Enrutamiento en SSR

- Utiliza el enrutamiento basado en archivos de Next.js (estructura del directorio `/app`).
- Renderiza las páginas en el servidor con datos de la API antes de enviarlas al cliente.
- Mejor rendimiento inicial y SEO desde el primer momento.
- Simplifica la organización del enrutamiento y los layouts.

### Principales diferencias

| Característica     | SPA (React)                            | SSR (Next.js)                                |
| ------------------ | -------------------------------------- | -------------------------------------------- |
| Mecanismo de rutas | React Router (configuración manual)    | Enrutamiento basado en archivos              |
| Carga inicial      | Más rápida después de la primera       | Más rápida en el primer renderizado          |
| Soporte SEO        | Requiere configuración adicional       | Soporte SEO integrado                        |
| Manejo de la API   | A través de `.env` y lógica en cliente | A través de `.env` y renderizado en servidor |
| Manejo de errores  | React ErrorBoundary                    | `app/error.tsx` y límites de error           |
