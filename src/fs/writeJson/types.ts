export type WriteJsonOptions = {
  encoding?: string;
  mode?: string | number | undefined;
  flag?: string | undefined;
  space?: string | number | undefined;
  replacer?: ((key: string, value: any) => any) | undefined;
};
