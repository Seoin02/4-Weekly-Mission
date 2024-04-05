interface KindOptions {
  placeholder?: string;
  type?: string;
}

export interface Props extends KindOptions {
  kind: string;
  type: string;
  onChange: (value: string | number) => void;
  onBlur: Event;
  passwordCheck: string;
  error: boolean;
}

export type Check = {
  [key: string]: {
    isValidCheck: RegExp;
  };
};
