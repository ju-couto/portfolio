import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Image,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logoImg from '../assets/logo.png';
import { ColorModeSwitcher } from './ColorModeSwitcher';


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        position="fixed"
        width="100%"
        zIndex="100"
        bg={useColorModeValue('#D6D6D6', 'rgba(18, 18, 18)')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 1 }}
        px={{ base: 4 }}
        align={'center'}>
          
        <Flex
          flex={{ base: 1, md: 'auto' }}

          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'left' }}>
          <Image src={logoImg} width={100} />
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} >
          <DesktopNav />
        
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>      
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const color = useColorModeValue('black', 'white');
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={6}
    >
      {NAV_ITEMS.map((navItem) => (
        <Button
          as={'a'}
          color={color}
          fontSize={'md'}
          fontWeight={500}
          variant={'link'}
          href={navItem.href ?? '#'}>
          {navItem.label}
        </Button>

      ))}
          <ColorModeSwitcher  />


    </Stack>
  );
};



const MobileNav = () => {
  return (
    <Stack
    position="fixed"

    zIndex="100"
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      top={2}
      shadow="lg"
      borderBottomRightRadius="20px"
      mt={100}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label} {...navItem} />
      ))}
      <ColorModeSwitcher />
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
       
      </Flex>
     
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'My Skills',
    href: '#skills'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
];
