declare module 'qrcode' {
  interface Options {
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
    type?: string;
    rendererOpts?: { quality?: number };
    margin?: number;
    width?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  }

  function toFile(
    path: string,
    text: string,
    options?: Options
  ): Promise<void>;

  function toDataURL(text: string, options?: Options): Promise<string>;

  export { toFile, toDataURL, Options };
  export default { toFile, toDataURL };
}
