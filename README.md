# Movie Explorer SPA/SSR

This project is a web application that allows users to explore a list of popular movies, search movies by title, and view detailed information for each movie. The app is implemented in two distinct versions: **SPA (Single Page Application)** using React, and **SSR (Server Side Rendering)** using Next.js.

## Structure

Each app has its own directory: `/react-app-spa` and `/next-ssr`. A shared workspace `/shared` contains reusable components, services, types, and mock data, promoting code reuse and scalability.

## Key Features

- **Home Page**: Displays a list of popular movies retrieved from a public API (The Movie Database API).
- **Movie Detail Page**: Shows detailed information including title, synopsis, rating, release date, and more.
- **Search Functionality**: Allows users to search for movies by title and view relevant results instantly.
- **Mock Data Mode**: The app supports a mock data mode that lets users explore the application without needing a valid TMDb API key. This is especially useful for testing or development environments.
- **Error Handling**: Includes user-friendly error boundaries and fallback UIs. For instance, if the API key is missing or invalid, the app shows a clear error message and allows switching to mock data with a single click.
- **Shared Component Library**: Both the SPA and SSR implementations use a common `shared` workspace, where UI components, services, types, and mock logic are defined and reused. This avoids duplication and ensures consistency across both environments.
- **Monorepo Architecture**: The project is structured as a monorepo using [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces), with separate apps for the React SPA (`/react-app-spa`) and Next.js SSR (`/next-ssr`), and a shared package (`/shared`) that encapsulates all reusable logic.

## Why Is Any of This Interesting?

By developing this app in both SPA and SSR approaches, we can better compare the two core paradigms of modern web development:

### SPA Routing

- Client-side routing handled with React Router.
- Fast, smooth navigation without full page reloads.
- SEO and initial load performance require extra care.
- Great for dynamic, interactive apps.

### SSR Routing

- Uses Next.js file-based routing (`/app` directory structure).
- Server renders pages with API data before sending to client.
- Better SEO and initial load performance out of the box.
- Simplifies routing and layout organization.

### Main Differences

| Feature              | SPA (React)                       | SSR (Next.js)                   |
| -------------------- | --------------------------------- | ------------------------------- |
| Routing Mechanism    | React Router (manual config)      | File-based routing              |
| Initial Load         | Faster after first load           | Faster on first paint           |
| SEO Support          | Requires extra setup              | Built-in SEO support            |
| API Key Handling     | Via `.env` and client-only logic  | Via `.env` and server rendering |
| Error Handling       | React ErrorBoundary               | `app/error.tsx` and boundary    |
| Mock Data Toggle     | Works in both via shared fallback | Same fallback UX                |
| Code Sharing         | Uses `/shared` workspace          | Uses `/shared` workspace        |
| Monorepo Integration | Yes (npm workspaces)              | Yes (npm workspaces)            |

---

Feel free to explore each version of the app and switch between mock and real data modes as needed.
