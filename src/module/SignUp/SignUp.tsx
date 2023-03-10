import { useRouter } from "next/router";

import { FormikHelpers, useFormik } from "formik";

import Button from "@/common/components/Button";
import Input from "@/common/components/Input";

import signupSchema from "./SignUp.validation";
import Spinner from "@/common/components/Spinner";
import { useState } from "react";
import { toast } from "react-toastify";
import client from "@/core/fetch";

export default function SignUp() {
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  const redirectLink = () => {
    router.push("/");
  };

  const initialValues = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  const handleOnSubmit = async (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => {
    const { confirmPassword, ...user } = values;
    isLoading(true);
    await client({ endpoint: "user", req: { body: user } })
      .then((res) => {
        formikHelpers.resetForm({ values: initialValues });
      })
      .finally(() => isLoading(false));
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={handleSubmit} className="grid grid-cols-4 md:gap-4">
        <Input
          label="Nome"
          name="name"
          className="mb-7 col-span-4 md:col-span-2"
          value={values.name}
          error={touched.name && errors.name ? errors.name : undefined}
          onChange={handleChange}
        />
        <Input
          label="E-mail"
          name="email"
          className="mb-7 col-span-4 md:col-span-2"
          value={values.email}
          error={touched.email && errors.email ? errors.email : undefined}
          onChange={handleChange}
        />
        <Input
          label="Senha"
          name="password"
          className="mb-7 col-span-4 md:col-span-2"
          type="password"
          changeTypePassword
          value={values.password}
          error={
            touched.password && errors.password ? errors.password : undefined
          }
          onChange={handleChange}
        />
        <Input
          label="Confirma senha"
          name="confirmPassword"
          className="mb-7 col-span-4 md:col-span-2"
          type="password"
          changeTypePassword
          value={values.confirmPassword}
          error={
            touched.confirmPassword && errors.confirmPassword
              ? errors.confirmPassword
              : undefined
          }
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="mt-1 w-full col-span-4"
          onClick={redirectLink}
        >
          Cadastrar
        </Button>
      </form>
    </>
  );
}
