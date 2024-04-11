import { Check } from '@/src/components/Input/InputType';
import { EMAIL_REGEX, PASSWORD_REGEX } from './regex';

const VALID_CHECK: Check = {
  id: {
    isValidCheck: EMAIL_REGEX,
  },
  password: {
    isValidCheck: PASSWORD_REGEX,
  },
  passwordRepeat: {
    isValidCheck: PASSWORD_REGEX,
  },
};

export default VALID_CHECK;
