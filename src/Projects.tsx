import { Box, Heading, Text, Stack, Container, useColorModeValue, Stat, SimpleGrid } from "@chakra-ui/react"
import ProjectBox from "./components/ProjectBox";

const Projects = () => {
  return (
    <Container id='about' maxW={'100%'}  p={{base:'12',lg:'5'}} backgroundColor={useColorModeValue('#D6D6D6', 'rgba(18, 18, 18, 0.6)')}>
    <Box
    id='projects'
    display="flex"
    flex="1"
    flexDirection="column"
    textAlign= 'left'>
    <Heading as="h2" p={10} textAlign={"center"} fontSize={{ base: 'xx-large', lg: 'xxx-large' }}>
      Projects
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 3, lg: 3 }}>
    
        {PROJECTS.map(project => {
            return (
                <ProjectBox
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                website={project.website}
                github={project.github}
                />
            )
        })}
         
    </SimpleGrid>
    </Box>
    </Container>
  )
}
 export default Projects
interface Project {
    title: string;
    description: string;
    technologies: string[];
    website?: string;
    github?: string
}
 const PROJECTS : Array<Project> = [
    {
        title: 'Movie Time',
        description: 'This app will help you to find your next movie to watch. A database with rating, actors and anything you need to know about the movie.',
        technologies: ['react', 'typescript'],
        github: 'https://www.google.com'
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos accusantium ducimus ab eaque saepe, facere magnam adipisci laboriosam placeat ipsam veniam eligendi fugiat! Omnis quas blanditiis rem laborum cumque.',
        technologies: ['java', 'typescript'],
        website: 'https://www.google.com',
        github: 'https://www.google.com'
    },
    
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos accusantium ducimus ab eaque saepe, facere magnam adipisci laboriosam placeat ipsam veniam eligendi fugiat! Omnis quas blanditiis rem laborum cumque.',
        technologies: ['react', 'typescript'],
        website: 'https://www.google.com',
        github: 'https://www.google.com'
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos accusantium ducimus ab eaque saepe, facere magnam adipisci laboriosam placeat ipsam veniam eligendi fugiat! Omnis quas blanditiis rem laborum cumque.',
        technologies: ['react', 'typescript'],
        website: 'https://www.google.com',
        github: 'https://www.google.com'
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos accusantium ducimus ab eaque saepe, facere magnam adipisci laboriosam placeat ipsam veniam eligendi fugiat! Omnis quas blanditiis rem laborum cumque.',
        technologies: ['react', 'typescript'],
        website: 'https://www.google.com',
        github: 'https://www.google.com'
    }
       
 ]

