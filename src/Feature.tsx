import {
    Box,
    chakra,
    Heading,
    SimpleGrid,
    Stat,
    Text,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  interface StatsCardProps {
    title: string;
    stat: string;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
      <Stat
      textAlign={'left'}
      shadow='md' borderWidth='1px'
      borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')} 
      borderRadius={20} transition="0.5s"
      bg={useColorModeValue('#BABABA','rgba(81, 81, 81, 0.35)')} 
      _hover={{borderColor:'gray', borderRadius:'30px'}}
        px={{ base: 4, md: 8 }}
        py={'5'}
        border={'1px solid'}>
        <Heading fontSize='xl'>Project 1</Heading>
      <Text mt={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et ratione eius ab, aperiam dolore commodi officia corrupti laudantium saepe dolorem quis nostrum corporis molestias nesciunt rerum itaque accusamus minima.</Text>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box   px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
            textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          What is our company doing?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'We serve'} stat={'50,000 people'} />
          <StatsCard title={'In'} stat={'30 different countries'} />
          <StatsCard title={'Who speak'} stat={'100 different languages'} />
        </SimpleGrid>
      </Box>
    );
  }
  