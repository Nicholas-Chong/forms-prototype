import { Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { FormContext } from '../../../../App';
import { useState, useContext } from 'react';

export interface InputFieldProps {
  typeOf: string;
  fieldId: number;
  isRequired: boolean;
}

export const InputField = ({
  typeOf,
  fieldId,
  isRequired,
}: InputFieldProps) => {
  const [value, setValue] = useState('1');
  const { formResponse } = useContext<any>(FormContext);

  const handleChange = (event: any) => {
    for (const res of formResponse.current)
      if (res.field === fieldId) {
        if (typeOf === 'boolean')
          if (event.target.value === '1') res.response = 'True';
          else res.response = 'False';
        else res.response = event.target.value;
        break;
      }
  };

  return (
    <>
      {typeOf === 'text' && (
        <Input
          onChangeCapture={handleChange}
          placeholder="Enter your answer here"
        />
      )}
      {typeOf === 'boolean' && (
        <RadioGroup
          onChange={setValue}
          value={value}
          onChangeCapture={handleChange}
        >
          <Stack direction="row">
            <Radio value="1">True</Radio>
            <Radio value="0">False</Radio>
          </Stack>
        </RadioGroup>
      )}
      {typeOf === 'email' && (
        <Input
          onChangeCapture={handleChange}
          placeholder="Enter your email here"
        />
      )}
    </>
  );
};
