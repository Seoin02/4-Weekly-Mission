const EMAIL_REGEX: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const PASSWORD_REGEX: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/;

export { EMAIL_REGEX, PASSWORD_REGEX };
