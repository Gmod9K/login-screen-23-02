import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../components/Input';

import login from '../../assets/login.svg';
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png';

import {
    Background,
    Button,
    Container,
    Content,
    Form,
    Image,
    LoginMisc,
    LoginWithDiv,
    RegisterDiv,
    Title,
} from './Styles';
import { useAuth } from '../../hooks/auth';

type SignInForm = {
    username: string;
    password: string;
    rememberme: boolean;
}
// ver aquele shape
const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
}).required();

export const SignIn = () => {
    const { register, handleSubmit, formState } = useForm<SignInForm>({
        resolver: yupResolver(schema)
    });

    const errors = formState.errors;

    const navigate = useNavigate();
    const location = useLocation();

    const { signIn } = useAuth();

    let from = location.state?.from?.pathname || "/";

    const handleSignIn = async ({ username, password }: SignInForm) => {
        await signIn({ email: username, password }, () => navigate(from, { replace: true }));
    }

    return(
        <Background>
            <img src={login} alt="LoginImage" width="400px"/>
            <Container>

                {/* Criar HEader */}

                <Image>
                    <img src={login} alt="LoginImage" width="400px"/>
                </Image>

                <Content>
                    <Form onSubmit={handleSubmit(handleSignIn)}>
                        <Title>Login</Title>

                        <Input
                            label='Usuário'
                            placeholder='Digite seu usuário'
                            error={errors.username}
                            {...register('username')}
                        />

                        <Input
                            type='password'
                            label='Senha'
                            placeholder='Digite sua senha'
                            error={errors.password}
                            {...register('password')}
                        />

                        <LoginMisc>
                            <div>
                                <Input
                                    type="checkbox"
                                    label='Lembrar de mim'
                                    id="rememberme"
                                    {...register('rememberme')}
                                />
                            </div>
                            <NavLink to='/forgot'>Esqueceu a senha?</NavLink>
                        </LoginMisc>

                        <Button type="submit" value="Entrar">Entrar</Button>

                        <RegisterDiv>
                            <label>Não tem uma conta?</label>
                            <NavLink to='/register'>Inscreva-se</NavLink>
                        </RegisterDiv>
                            {/* <NavLink /> */}
                        <LoginWithDiv>
                            <h2>Logar Com</h2>
                            <div>
                                <a href='https://facebook.com'>
                                    <img src={facebook} alt="FacebookLogo"></img>
                                </a>

                                <a href='https://google.com'>
                                    <img src={google} alt="GoogleLogo"></img>
                                </a>

                                <a href='https://apple.com'>
                                    <img src={apple} alt="AppleLogo"></img>
                                </a>
                            </div>
                        </LoginWithDiv>
                    </Form>
                </Content>
            </Container>
        </Background>
    )
}
