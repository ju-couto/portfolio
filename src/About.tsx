import {
  Box,
  Heading,
  Image,
  Text,
  Link,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import perfil from './assets/perfil.png';
import githubWhite from './assets/icons/github-white.png';
import githubBlack from './assets/icons/github-black.png';
import linkedinBlack from './assets/icons/linkedin-black.png'; 
import linkedinWhite from './assets/icons/linkedin-white.png';
import emailWhite from './assets/icons/email-white.png';
import emailBlack from './assets/icons/email-black.png';

function changeImage( e: React.MouseEvent<HTMLImageElement>, blackImg: string, whiteImg: string) {
  if (e.currentTarget.src === blackImg) {
    e.currentTarget.src = whiteImg;
  } else{
    e.currentTarget.src = blackImg;
  }
}



const About = () => {
  return (
    <Container id='about' maxW={'100%'} p="5" backgroundColor={useColorModeValue('white', '#282828')}>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
        
          position="relative"
          alignItems="center">
          <Box
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="15%">
            <Image width={{base:'200%', lg:'75%'}} src={perfil} />
          </Box>

        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent={"center"}
          textAlign= 'left'>
          <Heading as="h2" p={5} fontSize={{ base: 'xx-large', lg: 'xxx-large' }}>
            About
          </Heading>
          <Box
            as="p"
            marginTop="2"
            fontSize={{ base: 'lg', lg: 'x-large' }}
            >
            <Text mb={8}>
              My name is Julia and I really enjoy exploring and creating tech. My interest in web development started back 2020 when I enrolled in Information Systems course.
            </Text>
            <Text>
              Currently, I continue to dedicate myself heavily to Frontend Development.
            </Text>
           

          </Box>
          <Box display={'flex'} mt={10} >
           <Link width={24} height={24} p={2} href='https://github.com/ju-couto' isExternal><Image src={useColorModeValue(githubBlack, githubWhite)}  onMouseOver= {e => changeImage(e, githubWhite, githubBlack)} onMouseOut= {e => changeImage(e, githubWhite, githubBlack)} width={'100%'} height={'100%'} /></Link> 
           <Link width={24} height={24} p={2} href='https://www.linkedin.com/in/juliamcouto/' isExternal>
           <Image src={useColorModeValue(linkedinBlack, linkedinWhite)} onMouseOver={e => changeImage(e, linkedinWhite, linkedinBlack)}  onMouseOut= {e => changeImage(e, linkedinWhite, linkedinBlack)}width={'100%'} height={'100%'} />
            </Link>
            <Link>
            </Link>
            <Link width={24} height={24} p={2} href='mailto:juliamartinscouto0403@gmail.com' isExternal>
            <Image src={useColorModeValue(emailBlack, emailWhite)} onMouseOver={e => changeImage(e, emailWhite, emailBlack)} onMouseOut = {e => changeImage(e, emailWhite, emailBlack)} width={'100%'} height={'100%'} />
            </Link>
              </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
