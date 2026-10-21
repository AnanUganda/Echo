/// <reference types="vite/client" />
declare module '*.JPG' { const src: string; export default src; }

interface ImportMetaEnv {
  /** Deployed Google Apps Script web-app URL that receives form submissions. */
  readonly VITE_SHEET_ENDPOINT?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
