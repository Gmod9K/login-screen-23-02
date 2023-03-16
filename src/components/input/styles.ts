import styled, { css } from "styled-components";

interface InputProps {
    isError: boolean;
}

export const Label = styled.label`
    margin-top: 6px;
    margin-bottom: 6px;
`;

export const Input = styled.input<InputProps>`
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 8px;

    background-color: lightgray;

    border: 0;
    border-radius: 6px;

    ${(props) => props.isError && css`
        outline: 2px solid red;
    `}

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: 2px solid #00b5ff;
    }
`;

export const Error = styled.span`
    margin-top: 2px;
    margin-bottom: 4px;

    color: red;
`;