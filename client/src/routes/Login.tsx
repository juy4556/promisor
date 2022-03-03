import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMatch } from "react-router-dom";
import styled from "styled-components";
import * as S from "../components/_index";
interface ILoginForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
}
function Login() {
  const { register, setValue, handleSubmit } = useForm<ILoginForm>();
  const navigate = useNavigate();
  const loginMatch = useMatch("/login");
  const onLoginValid = ({ email, password }: ILoginForm) => {
    console.log(email, password);
  };
  const onRegisterValid = ({
    name,
    email,
    password,
    passwordConfirm,
    phoneNumber,
  }: ILoginForm) => {
    console.log(name, email, password, passwordConfirm, phoneNumber);
  };
  const onPushClick = () => {
    if (loginMatch) {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };
  return (
    <S.Template>
      <S.Header items={1}>
        <span>{loginMatch ? "LOGIN" : "REGISTER"}</span>
      </S.Header>
      <S.Container>
        <Logo>Promisor</Logo>
        <LoginForm
          page={loginMatch ? "login" : "register"}
          onSubmit={
            loginMatch
              ? handleSubmit(onLoginValid)
              : handleSubmit(onRegisterValid)
          }
        >
          {!loginMatch && (
            <LabelInput>
              <div>NAME</div>
              <S.Input
                {...register("name", {
                  required: "Name is required.",
                })}
              />
            </LabelInput>
          )}
          <LabelInput>
            <div>EMAIL</div>
            <S.Input
              type="email"
              {...register("email", {
                required: "Email is required.",
              })}
            />
          </LabelInput>
          <LabelInput>
            <div>PASSWORD</div>
            <S.Input
              {...register("password", {
                required: "Password is required.",
              })}
              type="password"
            />
          </LabelInput>
          {!loginMatch && (
            <>
              <LabelInput>
                <div>PASSWORD CONFIRM</div>
                <S.Input
                  {...register("passwordConfirm", {
                    required: "Password Confirm is required.",
                  })}
                  type="password"
                />
              </LabelInput>
              <LabelInput>
                <div>PHONE NUMBER</div>
                <S.Input
                  {...register("phoneNumber", {
                    required: "Phone number is required.",
                  })}
                />
              </LabelInput>
            </>
          )}
          <LoginButton>{loginMatch ? "Login" : "Join"}</LoginButton>
        </LoginForm>
        <Tab>
          {loginMatch ? "아직 계정이 없으십니까?" : "계정이 있으십니까?"}
          <span onClick={onPushClick}>
            {loginMatch ? "가입하기" : "로그인하기"}
          </span>
        </Tab>
      </S.Container>
    </S.Template>
  );
}
export default Login;

const Logo = styled.div`
  width: 90vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: winkle;
  font-size: 3rem;
  color: ${(p) => p.theme.green};
  text-shadow: -2px 1px 0px #ffffff;
`;
const LoginForm = styled.form<{ page: string }>`
  width: 60vw;
  height: ${(p) => (p.page == "login" ? "45vh" : "60vh")};
`;
const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    position: relative;
    width: fit-content;
    top: 10px;
    left: 10px;
    padding-inline: 10px;
    font-size: 0.9rem;
    color: ${(p) => p.theme.grey};
  }
`;

const LoginButton = styled.button`
  width: 100%;
  border: none;
  text-align: center;
  background-color: ${(p) => p.theme.textColor};
  color: ${(p) => p.theme.bgColor};
  border-radius: 5px;
  margin-top: 15px;
  padding: 10px;
  font-size: 0.8rem;
  cursor: pointer;
`;
const Tab = styled.div`
  color: ${(p) => p.theme.grey};
  font-size: 0.9rem;
  margin-top: 30px;
  span {
    padding-inline: 8px;
    font-weight: 600;
    cursor: pointer;
  }
`;
