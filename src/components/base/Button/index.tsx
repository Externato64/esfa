import React, { ReactNode } from "react";
import { Container } from "./styles";
import { Loading } from "../Loading";
import { useTheme } from "styled-components";

type ButtonProps = {
    name: string;
    onClick: () => void;
    active?: boolean;
    isLoading?: boolean;
    PrefixIcon?: ReactNode;
    SufixIcon?: ReactNode;
}

export const Button = ({
    name,
    onClick,
    active = true,
    isLoading,
    PrefixIcon,
    SufixIcon,
    ...props
}: ButtonProps): JSX.Element => {
    const theme = useTheme();
    const iconColor = theme.colors.text_inverse;

    return (
        <Container
            disabled={!active}
            onClick={onClick}
            {...props}
        >
            {
                isLoading ?
                <Loading
                    color1={iconColor}
                    size={1.5}
                />
                :
                <>
                {PrefixIcon}
                {name}
                {SufixIcon}
                </>
            }
        </Container>
    )
}