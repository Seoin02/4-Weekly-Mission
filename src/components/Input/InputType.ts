export type Check = {
  [key: string]: {
    isValidCheck: RegExp;
  };
};

export type StringOrNumber = string | number;
