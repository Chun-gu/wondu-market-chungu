import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface IFormValues {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit = async (values: IFormValues) => {
    const { username, password } = values;
    const response = await signIn("credentials", {
      username,
      password,
      callbackUrl: "/",
    });
    console.log(response);
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" {...register("username")} />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default Login;
