import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: skyblue;

    & > img {
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
`;

export const Form = styled.form`
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

export const Button = styled.button`
    margin-top: 28px;
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
