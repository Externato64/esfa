import React, { ElementType } from "react";
import { Container, Option } from "./styles";

type Option = {
    name: string;
    value: string;
}
type SelectProps = {
    defaultValue?: string;
    options: Array<Option>;
    onChange: (input: string) => void;
}

export const Select = ({
    onChange,
    options,
    defaultValue,
}: SelectProps): JSX.Element => {
    return (
        <Container
            onChange={(e) => {
                onChange(e.target.value);
            }}
            defaultValue={defaultValue}
        >
            {options.map(({ name, value }, id) => (
                <Option
                    key={id}
                    value={value}
                >
                    {name}
                </Option>
            ))
            }
        </Container>
    );
};