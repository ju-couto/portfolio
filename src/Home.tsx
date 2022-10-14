
import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import laptop from './assets/laptop.png';



const Home = () => {
  return (
    <Container maxW={'100%'} p={{base:'12',lg:'5'}} backgroundColor={useColorModeValue('#D6D6D6', 'rgba(18, 18, 18, 0.6)')}>
      <Box
        marginTop={{ base: '12', lg: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '', sm: '85%' }}
            marginTop="15%">
            <Image src={laptop} />

          </Box>

        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center">
          <Heading as="h1" marginTop={{lg: "1" }} fontSize={{ base: 'xx-large', lg: 'xxx-large' }}>
            Hi There! I’m Julia! &#x1F44B;
          </Heading>
          <Text
            as="p"
            marginTop="2"
            fontSize={{ base: 'xl', lg: '3xl' }}>
            Nice to meet you!
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
