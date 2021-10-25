import { Box } from '@chakra-ui/layout';
import { Heading, Text } from '@chakra-ui/react';

export interface FormHeaderProps {
  title: string;
  subTitle: string;
}

export const FormHeader = ({ title, subTitle }: FormHeaderProps) => (
  <Box
    bg="white"
    p="1em"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
  >
    <Heading as="h1" marginBottom="1em">
      {title}
    </Heading>
    <Text>{subTitle}</Text>
  </Box>
);
