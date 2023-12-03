import React, { ElementType, InputHTMLAttributes } from "react";
import { Container, InputApp } from "./styles";

type InputAppProps = InputHTMLAttributes<HTMLInputElement> & {
    Icon?: ElementType;
}

export const Input = ({ Icon, ...props }: InputAppProps): JSX.Element => {
    return (
        <Container>
            {Icon && <Icon />}
            <InputApp {...props}/>
        </Container>
    );
};