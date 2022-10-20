import { Box, Heading, Link, Stat, Text, useColorModeValue } from "@chakra-ui/react";

interface ProjectBoxProps {
    title: string;
    description: string;
    technologies: Array<string>;
    website?: string;
    github?: string;
}


export default function ProjectBox(props: ProjectBoxProps) {
    const colorWebsite = useColorModeValue('whiteAlpha.900', 'whiteAlpha.700'),
        bgWebsite = useColorModeValue('blackAlpha.300', 'blackAlpha.700'),
        hoverWebsite = useColorModeValue({ borderColor: 'gray', color: 'white', bg: 'blackAlpha.800' }, { borderColor: 'gray', color: 'white', bg: 'whiteAlpha.400' })

    return (
        <Stat
            textAlign={'left'}

            shadow='md' borderWidth='1px'
            borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
            borderRadius={20} transition="0.5s"
            bg={useColorModeValue('#BABABA', 'rgba(81, 81, 81, 0.35)')}
            _hover={{ borderColor: 'gray', borderRadius: '30px' }}
            px={{ base: 4, md: 8 }}
            py={'5'}>
            <Heading fontSize='xl'>{props.title}</Heading>
            <Text mt={4}>{props.description}</Text>
            <Box display={'flex'}>
                {props.technologies.map(technologie => {
                    let tech = TECHNOLOGIES.find(item => item.title === technologie)
                    return (
                        <Box width={"min-content"} pr={1} pl={1} mt={2} mr={5} backgroundColor={tech?.bg} textAlign={"center"} borderRadius={4} color={tech?.color}>
                            {technologie}
                        </Box>)
                })}
            </Box>
            {props.website && <Link
                href={props.website}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
                isExternal>
                <Box mt={5} textAlign={"center"} p={2} bg={bgWebsite}
                    color={colorWebsite}
                    borderRadius={4}
                    transition="0.5s"
                    _hover={hoverWebsite}
                    borderWidth='2px'
                >
                    Visit the WebSite
                </Box></Link>}
            {props.github && <Link
                href={props.github}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
                isExternal>
                <Box mt={5} textAlign={"center"} p={2} bg={bgWebsite}
                    color={colorWebsite}
                    borderRadius={4}
                    transition="0.5s"
                    _hover={hoverWebsite}
                    borderWidth='2px'>
                        Github Repositorie
                    </Box>
            </Link>}


        </Stat>
    )
}
interface TechProps {
    title: string;
    bg: string;
    color: string
}

const TECHNOLOGIES: Array<TechProps> = [
    { title: 'react', bg: '#00d8ff', color: 'blackAlpha.500' },
    { title: 'typescript', color: 'blackAlpha.600', bg: '#007acc' },
    { title: 'java', color: 'blackAlpha.600', bg: 'red.500' },
    { title: 'vue', color: 'blackAlpha.500', bg: '#41b883' },
    { title: 'node.js', color: 'white', bg: 'blue.500' },
    { title: 'express.js', color: 'white', bg: 'blue.500' },
    { title: 'mongodb', color: 'white', bg: 'blue.500' }

]

