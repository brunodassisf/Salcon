import * as yup from "yup";

const signinSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatório"),
});

export default signinSchema;
