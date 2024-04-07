export interface Props {
  kind: string;
  type: string;
  onChange: (value: StringOrNumber) => void;
  onBlur: Event;
  passwordCheck: StringOrNumber;
  error: boolean;
  id: StringOrNumber;
  password: StringOrNumber;
  passwordRepeat: StringOrNumber;
}

export type Check = {
  [key: string]: {
    isValidCheck: RegExp;
  };
};

export type StringOrNumber = string | number;
