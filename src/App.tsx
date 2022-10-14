import {
  ChakraProvider,
  Box
} from "@chakra-ui/react"
import Nav from './components/Nav'
import theme from "./assets/theme"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Nav />
      <Home />
      <About />
      <Skills />
    </Box>
  </ChakraProvider>
)
