export type WriteBufferOptions = {
  mode?: string | number | undefined;
  flag?: string | undefined;
  signal?: AbortSignal | undefined;
  flush?: boolean | undefined;
};
