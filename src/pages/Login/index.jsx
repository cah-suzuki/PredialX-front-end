import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";
import { UserContext } from "../../providers/User";
import { useContext } from "react";
import { Redirect, Link } from "react-router-dom";

function Login() {
  const { login, isAuth } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup.string().min(6, "Mínimo de 6 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    login(data);
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <Input
          label="Email"
          placeholder="Digite aqui seu email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          placeholder="Digite aqui sua senha"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message}
        />
        <button type="submit"> Entrar</button>
        <span>Ainda não possui uma conta ?</span>
        <Link to="/register">Cadastre-se</Link>
      </form>
    </Container>
  );
}

export default Login;
