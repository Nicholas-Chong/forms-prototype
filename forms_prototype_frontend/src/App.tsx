import { ChakraProvider, theme, Box, Stack, Button } from '@chakra-ui/react';
import { FormHeader } from './components/FormHeader';
import { FormField } from './components/FormField';
import { Form } from './types/form';
import { useState, useEffect, useRef, createContext } from 'react';

export const FormContext = createContext({});

function App() {
  const [formFields, setFormFields] = useState<any>([]);
  const [formTitle, setFormTitle] = useState('');
  const [formSubTitle, setFormSubTitle] = useState('');
  const formResponse = useRef<any>([]);

  useEffect(() => {
    // Call api to fetch form data
    fetchForm();
  }, []);

  const fetchForm = async () => {
    const formDataReq = await fetch(
      `http://127.0.0.1:8000${window.location.pathname}/`,
    );
    const formData: Form = await formDataReq.json();

    setFormFields(
      formData.prompts.map((prompt) => (
        <FormField
          field_id={prompt.id}
          type_of={prompt.type_of}
          is_required={prompt.is_required}
          prompt={prompt.prompt}
        />
      )),
    );
    setFormTitle(formData.name);
    setFormSubTitle(formData.creator);

    formResponse.current = formData.prompts.map((prompt) => ({
      response: prompt.type_of === 'boolean' ? 'True' : '',
      form: formData.id,
      respondant: 1,
      field: prompt.id,
    }));
  };

  const submitForm = async () => {
    fetch('http://127.0.0.1:8000/response/save_form_responses/', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(formResponse.current),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <FormContext.Provider value={{ formResponse: formResponse }}>
        <Box p="2em" maxW="800px" margin="auto">
          <Stack spacing={'2em'} mb="2em">
            <FormHeader title={formTitle} subTitle={formSubTitle} />
            {formFields}
          </Stack>
          <Button colorScheme="teal" size="sm" onClick={submitForm}>
            Submit
          </Button>
        </Box>
      </FormContext.Provider>
    </ChakraProvider>
  );
}

export default App;
