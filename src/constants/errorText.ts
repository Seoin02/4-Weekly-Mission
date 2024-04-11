export type Key = 'id' | 'password' | 'passwordRepeat';
export type text = 'errorNone' | 'errorGrammar';

export interface ErrorText {
  errorNone: string;
  errorGrammar: string;
}

const ERROR_TEXT: Record<Key, ErrorText> = {
  id: {
    errorNone: '이메일을 입력해주세요.',
    errorGrammar: '이메일 형식이 아닙니다.',
  },
  password: {
    errorNone: '비밀번호를 입력해주세요.',
    errorGrammar: '비밀번호는 영문과 숫자를 조합한 8자 이상을 입력해주세요.',
  },
  passwordRepeat: {
    errorNone: '비밀번호 확인을 입력해주세요.',
    errorGrammar: '비밀번호가 일치하지 않습니다.',
  },
} as const;

export default ERROR_TEXT;
