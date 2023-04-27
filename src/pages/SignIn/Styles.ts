import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: skyblue;

    & > img {
        /* espaçar essa imagem ? */
        width: 100vw;
        height: 100vh;

        filter: blur(8px);
    }
`;

export const Container = styled.div`
    width: 80vw;
    height: 80vh;

    display: flex;
    position: absolute;

    font-family: 'Roboto', sans-serif;

    border-radius: 28px;
    box-shadow: -5px 5px 5px darkgray;

    background-color: white;

    input {
        font-family: 'Roboto', sans-serif;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;

    background-color: #00b5ff;

    & > img {
        width: 95%;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

`;

export const Form = styled.form`
    height: 80%;

    display: flex;
    flex-direction: column;

    width: 75%;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;

    font-size: 36px;
    font-weight: 500;

    padding-bottom: 6px;
`;

export const LoginMisc = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 4px;

    & > div {
        display: flex;

        gap: 4px;
    }

    & > a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Button = styled.button`
    margin-top: 6px;
    padding: 6px;
    border: 0;
    border-radius: 6px;

    background-color: #00b5ff;
    color: white;

    font-family: 'Roboto', sans-serif;
    font-size: 24px;

    &:hover {
        opacity: 0.6;
    }
`;

export const RegisterDiv = styled.div`
    display: flex;
    justify-content: space-between;

    padding-top: 14px;

    & > a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const LoginWithDiv = styled.div`
    display: flex;
    flex-direction: column;

    & > h2 {
        padding-top: 28px;

        text-align: center;
    }

    & > div {
        display: flex;
        justify-content: space-evenly;

        margin-bottom: 28px;

        & > a > img {
            display: flex;

            padding-top: 40px;

            width: 6vw;
        }
    }
`;

// export const Icon = styled.img`
//     width: 3vw;
// `;
