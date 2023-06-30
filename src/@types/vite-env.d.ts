/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TOKEN_API: string;
  readonly VITE_PUBLIC_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}