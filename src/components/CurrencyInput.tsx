import React from 'react';
import InputMask from 'react-input-mask';
import { FieldInputProps } from 'formik';

interface CurrencyInputProps {
  field: FieldInputProps<string>;
  placeholder?: string;
}

const formatCurrency = (value: string): string => {
  if (!value) return 'R$ ';
  return 'R$ ' + value
    .replace(/\D/g, '')
    .replace(/(\d{1,2})$/, ',$1')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const unformatCurrency = (value: string): string => {
  return value.replace(/[R$\s.]/g, '').replace(',', '');
};

const CurrencyInput: React.FC<CurrencyInputProps> = ({ field, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = unformatCurrency(event.target.value);
    const formattedValue = formatCurrency(rawValue);
    field.onChange({
      ...event,
      target: {
        ...event.target,
        name: field.name,
        value: formattedValue,
      },
    });
  };

  return (
    <InputMask
      {...field}
      mask={''}
      maskChar={null}
      value={field.value}
      onChange={handleChange}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default CurrencyInput;
