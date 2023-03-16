import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../components/input';

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
} from "./Styles";

type SignIn = {
    username: string;
    password: string;
    rememberme: boolean;
}

const schema = yup.object({
    username: yup.string().required("Usuário é um campo obrigatório"),
    password: yup.string().required("Senha é um campo obrigatório"),
}).required();

export const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignIn>({ 
        resolver: yupResolver(schema)
     });

    const handleSignIn = (data: SignIn) => {
        setTimeout(() => {
            console.log(data);
        }, 0);
    }

    return(
        <Background>
            <img src={login} alt="LoginImage" width="400px"/>
            <Container>
                <Image>
                    <img src={login} alt="LoginImage" width="400px"/>
                </Image>
                
                <Content>
                    <Form onSubmit={handleSubmit(handleSignIn)}>
                        <Title>LOGIN</Title>

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
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Esqueceu a senha?</a>
                        </LoginMisc>

                        <Button type="submit" value="Entrar">Entrar</Button>

                        <RegisterDiv>
                            <label>Não tem uma conta?</label>
                            <a href='https://www.youtube.com/watch?v=1xzGPPxKgJM'>Inscreva-se</a>
                        </RegisterDiv>

                        <LoginWithDiv>
                            <h2>Logar Com</h2>
                            <div>
                                <a href='www.facebook.com'>
                                    <img src={facebook} alt="FacebookLogo"></img>
                                </a>

                                <a href='www.google.com'>
                                    <img src={google} alt="GoogleLogo"></img>
                                </a>

                                <a href='www.google.com'>
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
