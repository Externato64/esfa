import React from "react";
import { Container } from "./styles";

type LoadingProps = {
    color1?: string;
    color2?: string;
    size?: number;
}

export const Loading = (input: LoadingProps): JSX.Element => {
    return (
        <Container {...input} />
    )
}