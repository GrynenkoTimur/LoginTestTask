import * as yup from "yup";

const SPECIAL_SYMBOL_REGEX = /[$&+,:;=?@#|'<>.^*()%!-]/;
const SYMBOL_REGEX = /[a-zA-Z]/;
const NUMBER_REGEX = /[0-9.-]/;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const PASSWORD_VALIDATION = yup
  .string()
  .min(8, "Password must be at least 8 symbols")
  .matches(
    SPECIAL_SYMBOL_REGEX,
    "Your password should consist at least one special symbol"
  )
  .matches(SYMBOL_REGEX, "Your password should consist at least one letter")
  .matches(NUMBER_REGEX, "Your password should consist at least one number")
  .required();

export const EMAIL_VALIDATION = yup
  .string()
  .email("Email is not valid")
  .required("Email is required")
  .matches(EMAIL_REGEX, "Email is not valid");
