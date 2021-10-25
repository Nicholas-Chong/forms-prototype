import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { FieldTypes } from '../../types/field';
import { InputField } from './components/InputField';

export interface FormFieldProps {
  dependencies?: number[];
  field_id: number;
  type_of: FieldTypes;
  is_required: boolean;
  prompt: string;
}

export const FormField = ({
  type_of,
  prompt,
  field_id,
  is_required,
}: FormFieldProps) => {
  return (
    <Box
      bg="white"
      p="1em"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
    >
      <Text mb="0.5em">{prompt}</Text>
      <InputField
        typeOf={type_of}
        fieldId={field_id}
        isRequired={is_required}
      />
    </Box>
  );
};
