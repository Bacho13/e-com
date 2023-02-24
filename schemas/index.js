import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const nameRules = /\b(?=[a-zA-Z]{2,})[a-zA-Z]+\b/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const phoneRules = /^5\d{8}$/;

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(nameRules, { message: "Please eneter only letters. (min 2)" })
    .required("Required"),
  last: yup
    .string()
    .min(2)
    .matches(nameRules, { message: "Please eneter only letters. (min 2)" })
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  pNumber: yup
    .string()
    .matches(phoneRules, {
      message: "Please eneter valid georgian phone number",
    })
    .required("Required"),

  pass: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Please create a stronger password. (Use min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit)",
    })
    .required("Password Is Required"),
  confPass: yup
    .string()
    .oneOf([yup.ref("pass"), null], "Passwords must match")
    .required("Required"),
});
