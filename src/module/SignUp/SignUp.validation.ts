import * as yup from "yup";

const signupSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  name: yup.string().required("Nome obrigatório"),
  password: yup.string().required("Senha obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "A senha digita não são iguais")
    .required("Confirme sua senha"),
});

export default signupSchema;
