export type WriteTextOptions = {
  encoding?: string;
  mode?: string | number | undefined;
  flag?: string | undefined;
  signal?: AbortSignal | undefined;
  flush?: boolean | undefined;
};
