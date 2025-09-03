// -------------------------------
// Module declarations for static assets
// -------------------------------
declare module '*.css';
declare module '*.svg';

// -------------------------------
// JSON imports
// -------------------------------
declare module '*.json' {
  const value: unknown;
  export default value;
}

// -------------------------------
// Interfaces for structured JSON data
// -------------------------------

export interface Meta {
  hero: string;
  cta: string;
  watchLive: string;
  wordOfTheMonth: {
    theme: string;
    description: string;
  };
  welcome: {
    mainText: string;
    subText: string;
    cta: string;
  };
  pastor: {
    name: string;
    message: string;
    title?: string;
    bio?: string;
    image?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  videos: string[];
}

export interface Testimony {
  id: string;
  name: string;
  message: string;
  image?: string;
  "text": string;
}

export interface Mandate {
  id: string;
  title: string;
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  lat: number;
  lng: number;
  blurb: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  image: string;
}

// Optional: define types for scripture challenge JSON
export interface ScriptureData {
  title: string;
  subtitle: string;
  grid: string[][];
  clues: string[];
}
