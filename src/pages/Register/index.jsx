import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory, Redirect } from "react-router-dom";
import { Container } from "./style";

function Register({ authenticated }) {
  const schema = yup.object().shape({
    id: yup.string().required("Campo Obrigatório"),
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup.string().min(6, "Mínimo de 8 dígitos"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ id, name, email, password }) => {
    console.log(typeof id, typeof name, typeof email, typeof password);

    const user = {
      id,
      name,
      email,
      password,
    };

    api
      .post("/cooperator", user)
      .then((res) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((err) => {
        toast.error("Erro ao criar a conta,tente outro id");
      });
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <span>Começe a se organizar hoje!</span>
        <Input
          label="Id"
          placeholder="Digite aqui seu id"
          register={register}
          name="id"
          error={errors.id?.message}
        />
        <Input
          label="Nome"
          placeholder="Digite aqui seu nome"
          register={register}
          name="name"
          error={errors.name?.message}
        />
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
        <Input
          label="Confirmar Senha"
          placeholder="Digite novamente sua senha"
          register={register}
          name="passwordConfirm"
          type="password"
          error={errors.passwordConfirm?.message}
        />

        <button type="submit"> Cadastrar</button>
      </form>
    </Container>
  );
}

export default Register;
