import {
  Container,
  Box,
  Heading,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdMessage,
  MdEmail
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

const Contact = () => {
  return (
    <Container maxW="100%"
    id='contact'
      p={{ sm: 5, md: 5, lg: 16 }} backgroundColor={useColorModeValue('#D6D6D6', 'rgba(18, 18, 18, 0.6)')} overflow="hidden" >

      <Heading>Contact</Heading>
      <Box m={8} >
        <VStack spacing={5} display={'flex'}>
          {LABELS.map((label) => (
            <FormControl id={label.id} width={{ sm: '80%', md: '60%', lg: '40%' }}>
              <FormLabel>{label.label}</FormLabel>
              <InputGroup >
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsPerson color="gray.800" />}
                />
                <Input
                  backgroundColor='blackAlpha.200'
                  type="text" size="md" />
              </InputGroup>
            </FormControl>
          ))}



          <FormControl id="message" width={{ sm: '80%', md: '60%', lg: '40%' }}>
            <FormLabel>Message</FormLabel>
            <InputGroup >
              <InputLeftElement
                pointerEvents="none"
                children={<MdMessage />}
              />
              <Textarea pl={10}
                backgroundColor='blackAlpha.200'
              />
            </InputGroup>
          </FormControl>
          <FormControl id="send" float="right">
            <Button
              color={'white'}
              bg={useColorModeValue('blackAlpha.300', 'blackAlpha.700')}
              _hover={{ bg: useColorModeValue('blackAlpha.800', 'whiteAlpha.400') }}>
              Send Message
            </Button>
          </FormControl>
        </VStack>
      </Box>


    </Container>
  );
}
export default Contact;

const LABELS = [
  {
    label: 'Name',
    id: 'name',
    icon: <BsPerson />,
  },
  {
    label: 'Mail',
    id: 'mail',
    icon: <MdEmail />,
  }
]
