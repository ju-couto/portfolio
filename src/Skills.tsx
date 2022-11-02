import {
    Box,
    Heading,
    Image,
    Wrap,
    WrapItem,
    useColorModeValue,
    Container,
    Tooltip,
} from '@chakra-ui/react';
import html from './assets/technologies/html-black.png';
import css from './assets/technologies/css-black.png';
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
                    {SKILLS_FRONT.map((skill:any) => (
                        
                        <Tooltip hasArrow label={skill.name} >                        
                        <WrapItem>
                            <Image src={skill.image} width={136} height={136} m={10} />
                        </WrapItem>
                        </Tooltip>
                    ))}
                </Wrap>
                <Wrap spacing='20px' justify='center'>
                    {SKILLS_BACK.map((skill:any) => (
                          <Tooltip hasArrow label={skill.name} >               
                        <WrapItem>
                            <Image src={skill.image} width={136} height={136} m={10} />
                        </WrapItem>
                        </Tooltip>

                    ))}
                </Wrap>
                <Wrap spacing='20' justify='center'>
                    {SKILLS_OTHER.map((skill:any) => (
                            <Tooltip hasArrow label={skill.name} >
                        <WrapItem>
                            <Image src={skill.image} width={136} height={136} m={10} />
                        </WrapItem>
                        </Tooltip>
                    ))}

                </Wrap>
            </Box>

        </Container>
    )
}
export default Skills;

const SKILLS_FRONT = [
    {
        name: 'HTML5',
        image: html
    },
    {
        name: 'CSS3',
        image: css    
    },
    {
        name: 'JavaScript',
        image: js,
    },  
    {
        name: 'TypeScript',
        image: ts,
    },
    {
        name: 'React.js',
        image: react,
    },
    {
        name: 'Vue.js',
        image: vue,
    }
]

const SKILLS_BACK = [
    {
        name: 'SQL',
        image: sql,
    },
    {
        name: 'Python',
        image: python,
    },
    {
        name: 'Java',
        image: java,
    }
]

const SKILLS_OTHER = [
    {
        name: 'Git',
        image: git
    }
]
