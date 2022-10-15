import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdMessage,
    MdEmail,
    MdLocationOn,
    
    
  } from 'react-icons/md';
  import {  BsPerson } from 'react-icons/bs';
  
  export default function contact() {
    return (
      <Container  maxW="100%"  
      p={{ sm: 5, md: 5, lg: 16 }}  overflow="hidden" color="white">

                    <Heading>Contact</Heading>
                    <Box m={8} >
                      <VStack spacing={5} display={'flex'}>
                        <FormControl id="name" width={{sm:'80%',md:'60%', lg:'40%'}}>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" width={{sm:'80%',md:'60%', lg:'40%'}}>
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children  = {<MdEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
    
                        <FormControl id="name"  width={{sm:'80%',md:'60%', lg:'40%'}}>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
        
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
         

      </Container>
    );
  }
  