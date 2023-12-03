import { ElementType } from 'react';
import { Container, InputCurrency } from './styles';

type CurrencyInputProps = {
    Icon?: ElementType;
    placeholder?: string;
    defaultValue?: number;
    value: number;
    onChange: (input: number) => void;
}

export const CurrencyInput = ({
    onChange,
    defaultValue,
    placeholder,
    value,
    Icon,
}: CurrencyInputProps): JSX.Element => {
    return (
        <Container>
            {Icon && <Icon />}
            <InputCurrency
                // placeholder={placeholder ?? "Inserir valor"}
                // defaultValue={defaultValue ?? 0}
                // decimalsLimit={2}
                // decimalScale={2}
                // value={String(value.toFixed(2)).replace('.', ',')}
                // onValueChange={(value) => {
                //     const newValue = value?.replaceAll('.', '').replace(',', '.') ?? "";
                //     onChange(Number(newValue));
                // }}
                // prefix='R$'
                // decimalSeparator=','
                // groupSeparator='.'
                decimalSeparator=","
                thousandSeparator="."
                fixedDecimalScale
                decimalScale={2}
                prefix="R$ "
                value={value ? String(value) : ''}
                autoComplete="off"
                placeholder={placeholder}
                onValueChange={(values) => {
                  onChange(values.floatValue ?? 0);
                }}
            />
        </Container>
    );
};