import {
  Box,
  Heading,
  Image,
  Text,
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
import SocialMediaIcon from './components/SocialMediaIcon';


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
            {SOCIAL_MEDIA.map(icon => {
              return (
               <SocialMediaIcon 
               blackImg={icon.imgBlack}
                whiteImg={icon.imgWhite}
                href={icon.href}
               />
              )
            })}
        </Box>
        </Box>
      </Box>
    </Container>
  );
};

interface SMItem {
  label: string;
  subLabel?: string;
  href: string;
  imgBlack: string;
  imgWhite: string;
}
const SOCIAL_MEDIA: Array<SMItem>= [
  {
    label: 'github',
    href: 'https://github.com/ju-couto',
    imgBlack: githubBlack,
    imgWhite: githubWhite,
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/juliamcouto/',
    imgBlack: linkedinBlack,
    imgWhite: linkedinWhite
  },
  {
    label: 'email',
    href: 'mailto:juliamartinscouto0403@gmail.com',
    imgBlack: emailBlack,
    imgWhite: emailWhite
  }
  
];
export default About;
