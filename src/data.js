// src/data.js
export const projects = [
  {
    id: 1,
    title: "React Recipe Finder",
    description:
      "A dynamic search application using the MealDB API. Features include async data fetching, conditional rendering, and responsive grid layout.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=500&q=60", // We will replace this later with a screenshot of YOUR app
    link: "https://recipe-search-app-hazel.vercel.app/", // Your Vercel Link
    tech: ["React", "API", "CSS Grid"],
  },
  {
    id: 2,
    title: "Digital Agency Site",
    description:
      "A multi-page business website built with React Router. Features modern navigation, component-based architecture, and fully responsive design.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60",
    link: "https://a-multi-page-marketing-website.vercel.app/",
    tech: ["React Router", "SPA", "Flexbox"],
  },
  {
    id: 3,
    title: "Interactive Task Manager",
    description:
      "A functional CRUD application featuring DOM manipulation, local storage persistence, and dynamic state management.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=500&q=60",
    link: "https://the-interactive-js-task-manager.vercel.app/",
    tech: ["JavaScript", "DOM", "LocalStorage"],
  },
];
