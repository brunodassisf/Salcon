import { useRouter } from "next/router";

import Button from "@/common/components/Button";
import Input from "@/common/components/Input";
import { useFormik } from "formik";
import signinSchema from "./SignIn.validation";

export default function SignIn() {
  const router = useRouter();

  const redirectLink = () => {
    router.push("/gerenciar");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handleOnSubmit = (values: any) => {
    console.log(values);
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signinSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="E-mail"
        name="email"
        className="mb-7"
        value={values.email}
        error={touched.email && errors.email ? errors.email : undefined}
        onChange={handleChange}
      />
      <Input
        label="Senha"
        name="password"
        className="mb-7"
        type="password"
        changeTypePassword
        value={values.password}
        error={
          touched.password && errors.password ? errors.password : undefined
        }
        onChange={handleChange}
      />
      <Button type="submit" className="mt-5 w-full">
        Entrar
      </Button>
    </form>
  );
}
