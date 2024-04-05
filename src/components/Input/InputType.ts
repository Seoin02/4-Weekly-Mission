interface KindOptions {
  placeholder?: string;
  type?: string;
  error?: string;
  isPassword?: boolean;
}

export interface Props extends KindOptions {
  kind: string;
  type: string;
  onChange: (value: string | number) => void;
  onBlur: Event;
  passwordCheck: string;
  $error: boolean;
}
