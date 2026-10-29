interface ImportMetaEnv {
  /** Optional form submission access key. */
  readonly PUBLIC_FORM_ACCESS_KEY?: string;
  /** Optional form submission POST endpoint override. */
  readonly PUBLIC_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
