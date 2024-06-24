import React, { useState, useEffect, useRef } from 'react';
import { FieldInputProps } from 'formik';
import InputMask from 'react-input-mask';

interface ConsumptionInputProps {
  field: FieldInputProps<string>;
  placeholder?: string;
}

const formatConsumption = (value: string): string => {
  if (!value) return '';
  return value.replace(/\D/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' kWh';
};

const unformatConsumption = (value: string): string => {
  return value.replace(/[^\d]/g, '');
};

const ConsumptionInput: React.FC<ConsumptionInputProps> = ({ field, placeholder }) => {
  const [inputValue, setInputValue] = useState<string>(formatConsumption(field.value));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(formatConsumption(field.value));
  }, [field.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const rawValue = unformatConsumption(input.value);

    //@ts-ignore
    if (event.nativeEvent.inputType === 'deleteContentBackward' && input.selectionStart === input.selectionEnd) {
      const formattedValue = rawValue.slice(0, -1);
      setInputValue(formatConsumption(formattedValue));

      field.onChange({
        ...event,
        target: {
          ...event.target,
          name: field.name,
          value: formatConsumption(formattedValue),
        },
      });

      return;
    }

    //@ts-ignore
    if (event.nativeEvent.inputType === 'insertText' && /\D/.test(event.nativeEvent.data!)) {
      return;
    }

    const formattedValue = formatConsumption(rawValue);
    const cursorPosition = input.selectionStart ?? 0;

    setInputValue(formattedValue);

    field.onChange({
      ...event,
      target: {
        ...event.target,
        name: field.name,
        value: formattedValue,
      },
    });

    window.requestAnimationFrame(() => {
      if (inputRef.current) {
        const newCursorPosition = cursorPosition + (formattedValue.length - input.value.length);
        inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
      }
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

export default ConsumptionInput;
