import {
    Box,
    Heading,
    Image,
    Wrap,
    WrapItem,
    useColorModeValue,
    Container,
} from '@chakra-ui/react';
import htmlWhite from './assets/technologies/html-white.png';
import htmlBlack from './assets/technologies/html-black.png';
import cssWhite from './assets/technologies/css-white.png';
import cssBlack from './assets/technologies/css-black.png';
import js from './assets/technologies/js.png';
import ts from './assets/technologies/ts.png';
import react from './assets/technologies/react.png';
import vue from './assets/technologies/vue.png';
import sql from './assets/technologies/sql.png';
import python from './assets/technologies/python.png';
import java from './assets/technologies/java.png';
import git from './assets/technologies/git.png';


const Skills = () => {
    return (
        <Container id='skills' maxWidth={'100%'} p="5"  backgroundColor={useColorModeValue('white', '#282828')}>
            <Heading as="h2" p={5} fontSize={{ base: 'xx-large', lg: 'xxx-large' }}>
                My Skills
            </Heading>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center">
                <Wrap spacing='20px' justify='center'>
                    <WrapItem>
                        <Image src={htmlWhite} width={136} height={136} m={10} />
                    </WrapItem>
                    <WrapItem>
                        <Image src={cssWhite} width={136} height={136} m={10} />
                    </WrapItem>
                    <WrapItem>
                        <Image src={js} width={136} height={136} m={10} />
                    </WrapItem>
                    <WrapItem>
                        <Image src={ts} width={136} height={136} m={10} />

                    </WrapItem>
                    <WrapItem>
                        <Image src={react} width={136} height={136} m={10} />
                    </WrapItem>
                    <WrapItem>
                        <Image src={vue} width={136} height={136} m={10} />

                    </WrapItem>
                </Wrap>
                <Wrap spacing='20px' justify='center'>

                    <WrapItem>
                        <Image src={sql} width={136} height={136} m={10} />
                    </WrapItem>
                    <WrapItem>
                        <Image src={python} width={136} height={136} m={10} />
                    </WrapItem>
                    <WrapItem>
                        <Image src={java} width={136} height={136} m={10} />
                    </WrapItem>
                </Wrap>
                <Wrap spacing='20' justify='center'>
                    <WrapItem>
                        <Image src={git} width={136} height={136} m={10} />

                    </WrapItem>

                </Wrap>
            </Box>

        </Container>
    )
}
export default Skills;