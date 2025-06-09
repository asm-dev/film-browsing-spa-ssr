# Movie Explorer SPA/SSR

This project is a web application that allows users to explore a list of popular movies, search them by title, and view detailed information about each one. The app is implemented in two different versions: **SPA (Single Page Application)** using React, and **SSR (Server-Side Rendering)** using Next.js.

![image](https://github.com/user-attachments/assets/d2cb9720-903d-48d9-a2ec-3f1e71180e81)

For a **quick demo** of the features, you can check out [this page](https://film-browsing-spa-ssr-react-app-spa.vercel.app/), where the React project is deployed. Since there is no API Key, you won’t be able to test the API connection, but you can explore the navigation mechanisms.

If you want to **test the API connection**, you’ll need to register on [TMDB](https://developer.themoviedb.org/docs/getting-started) to get your API key, which must be added to both `.env` files in the project. Once added, run `npm i` to install the dependencies in both the root directory and each of the included projects. After installing the dependencies, you can build with `npm run dev` from `/react-app-spa` and `/next-ssr`. Note that if you use multiple terminals, you can run both projects simultaneously.

## Structure

Each application has its own directory: `/react-app-spa` and `/next-ssr`. In addition, there is a shared space called `/shared`, which contains reusable components, services, types, and mock data. This promotes code reuse and scalability.

## Features

**Main features**:
- Home page: displays a list of popular movies fetched from a public API (The Movie Database API).
- Movie detail page: shows detailed information such as title, synopsis, rating, release date, among other data.
- Search function: allows users to search movies by title and view relevant results instantly.

**Secondary features**:
- Navigation with mock data: the app includes a mode with mock data so it can be explored without a valid TMDb API key. This is very useful for development or testing environments.
- Error handling: includes user-friendly error boundaries and fallback screens. For example, if the API key is missing or invalid, the app displays a clear message and allows switching to mock data mode with a single click.
- Shared component library: both SPA and SSR versions use the same shared space `shared`, where UI components, services, types, and mock logic are defined and reused. This avoids duplication and ensures consistency in both environments.
- Monorepo architecture: the project is structured as a monorepo using [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces), with separate applications for the SPA in React (`/react-app-spa`) and SSR in Next.js (`/next-ssr`), plus a shared package (`/shared`) that encapsulates all reusable logic.
- Atomic components: when developing an app, organizing components is essential for maintainability and scalability. One of the most common approaches is the atomic folder structure, which we use to host our shared React components in `/shared`.

## Why is all this interesting?

By developing this application in both SPA and SSR versions, we can better compare the two main approaches of modern web development:

**Routing in SPA**

- Client-side routing is handled with React Router.
- Fast and smooth navigation without reloading the page.
- SEO and initial load performance require additional configuration.
- Ideal for dynamic and interactive applications.

**Routing in SSR**

- Uses file-based routing from Next.js (based on the `/app` directory structure).
- Renders pages on the server with API data before sending them to the client.
- Better initial performance and SEO out of the box.
- Simplifies routing and layout organization.

**Main differences**

| Feature            | SPA (React)                            | SSR (Next.js)                                |
| ------------------ | -------------------------------------- | -------------------------------------------- |
| Routing mechanism  | React Router (manual setup)            | File-based routing                           |
| Initial load       | Faster                                 | Faster on first render                       |
| SEO support        | Requires extra setup                   | Built-in SEO support                         |
| API handling       | Via `.env` and client-side logic       | Via `.env` and server-side rendering         |
| Error handling     | React ErrorBoundary                    | `app/error.tsx` and error boundaries         |
