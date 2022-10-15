import { Box, Heading, Text, Stack, Container, useColorModeValue, color } from "@chakra-ui/react"

const Projects = () => {
  return (
    <Container id='about' maxW={'100%'}  p={{base:'12',lg:'5'}} backgroundColor={useColorModeValue('white', '#red')}>
    <Box
    id='projects'
    display="flex"


    flex="1"
    flexDirection="column"
    justifyContent={"center"}
    textAlign= 'left'>
    <Heading as="h2" p={5} textAlign={"center"} fontSize={{ base: 'xx-large', lg: 'xxx-large' }}>
      Projects
    </Heading>
    <Stack  m= {5} spacing={8} direction={{base:'column', lg:'row'}}>
         <Box p={5} shadow='md' borderWidth='1px' borderRadius={20} transition="0.5s" _hover={{borderColor:'gray', borderRadius:'30px'}}>
      <Heading fontSize='xl'>Project 1</Heading>
      <Text mt={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et ratione eius ab, aperiam dolore commodi officia corrupti laudantium saepe dolorem quis nostrum corporis molestias nesciunt rerum itaque accusamus minima.</Text>
    </Box>
    <Box p={5} shadow='md' borderWidth='1px' borderRadius={20} transition="0.5s" _hover={{borderColor:'gray', borderRadius:'30px'}}>
      <Heading fontSize='xl'>Project 2</Heading>
      <Text mt={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos accusantium ducimus ab eaque saepe, facere magnam adipisci laboriosam placeat ipsam veniam eligendi fugiat! Omnis quas blanditiis rem laborum cumque.</Text>
    </Box>
    <Box p={5} shadow='md' borderWidth='1px' borderRadius={20} transition="0.5s" _hover={{borderColor:'gray', borderRadius:'30px'}}>
      <Heading fontSize='xl'>Project 3</Heading>
      <Text p={1} mt={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex, aspernatur mollitia vitae, voluptatum quo, cum ea voluptatem modi incidunt commodi itaque distinctio nulla ad omnis necessitatibus tempore consequatur illum.</Text>
      <Box display={'flex'}>
      <Box width={20} mr={5} textAlign={"center"} borderRadius={4} color={'green'} borderWidth='1px' >VUE</Box>
      <Box width={20} mr={5} textAlign={"center"} borderRadius={4} color={'aqua'} borderWidth='1px' >react</Box>

       
        </Box>
      
      <Box  mt={5} textAlign={"center"} p={2}  borderRadius={4} transition="0.5s" _hover={{borderColor:'gray',bg:'red'}} borderWidth='2px' >Visit the WebSite</Box>

    
      </Box>
      
    </Stack>
    </Box>
    </Container>
  )
}
 export default Projects
