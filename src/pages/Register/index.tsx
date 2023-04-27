import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../components/Input';

import login from '../../assets/login.svg';
// import facebook from '../../assets/facebook.png'
// import google from '../../assets/google.png'
// import apple from '../../assets/apple.png';

import {
    Background,
    Button,
    Container,
    Content,
    Form,
    Image,
    Title
} from './Styles';

type RegisterForm = {
    fullName: string;
    username: string;
    mail: string;
    password: string;
    passwordConfirm: string;
}

const schema = yup.object({
    fullName: yup.string().required("Campo obrigatório"),
    username: yup.string().required("Campo obrigatório"),
    mail: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
        .string()
        .required("Campo obrigatório")
        .oneOf([yup.ref('password')],
        "As senhas devem ser iguais"
        )
})

export const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<RegisterForm>({
        resolver: yupResolver(schema)
    });

    const handleRegister = (data: RegisterForm) => {
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
                    <Form onSubmit={handleSubmit(handleRegister)}>
                        <Title>Cadastro</Title>

                        <Input
                            label='Nome completo'
                            placeholder='Seu Nome'
                            error={errors.fullName}
                            {...register('fullName')}
                        />

                        <Input
                            label='Nome de usuário'
                            placeholder='Nome de Usuário'
                            error={errors.username}
                            {...register('username')}
                        />

                        <Input
                            label='E-mail'
                            placeholder='E-mail'
                            error={errors.mail}
                            {...register('mail')}
                        />

                        <Input
                            type='password'
                            label='Senha'
                            placeholder='Sua Senha'
                            error={errors.password}
                            {...register('password')}
                        />

                        <Input
                            type='password'
                            label='Confirmar senha'
                            placeholder='Confirmar Senha'
                            error={errors.passwordConfirm}
                            {...register('passwordConfirm')}
                        />

                        {/* CoisaNavigation */}

                        <Button type="submit" value="Cadastrar-se">Cadastrar-se</Button>
                    </Form>
                </Content>
            </Container>
        </Background>
    )
}
