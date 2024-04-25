export type ReadJsonOptions = {
  encoding?: string;
  flag?: string | undefined;
  throws?: boolean | undefined;
  reviver?: ((key: any, value: any) => any) | undefined;
};
