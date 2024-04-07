export type Key = 'id' | 'password' | 'passwordRepeat';
export type text = 'placeholder' | 'type' | 'errorMessage';

export interface InputText {
  placeholder: string;
  type: string;
  errorMessage: string;
}

const INPUT_CONTENT: Record<Key, InputText> = {
  id: {
    placeholder: '아이디를 입력해주세요.',
    type: 'text',
    errorMessage: '아이디가 없습니다.',
  },
  password: {
    placeholder: '비밀번호를 입력해주세요.',
    type: 'password',
    errorMessage: '비밀번호가 없습니다.',
  },
  passwordRepeat: {
    placeholder: '비밀번호를 확인해주세요.',
    type: 'password',
    errorMessage: '비밀번호가 일치하지 않습니다.',
  },
} as const;

export default INPUT_CONTENT;
