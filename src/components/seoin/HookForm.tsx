import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputSeoin from "./Input";
import styles from "./FormSeoin.module.css";

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const schema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: "이메일을 입력해 주세요." })
      .email({ message: "이메일 형식으로 입력해 주세요." }),
    password: z
      .string()
      .trim()
      .min(1, { message: "비밀번호를 입력해 주세요." })
      .min(8, { message: "8자 이상 입력해 주세요." }),
    passwordConfirm: z
      .string()
      .trim()
      .min(1, { message: "비밀번호를 입력해 주세요." }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export default function HookFormSeoin() {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setError,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleValidSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleValidSubmit)}>
      <InputSeoin
        id="seoin"
        type="text"
        label="ID: "
        style={styles.Medium}
        isError={false}
        labelStyle={styles.Label}
        placeholder={"아이디를 입력해주세요"}
      />
    </form>
  );
}
