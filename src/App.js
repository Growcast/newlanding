//STYLES
import './App.css';

import "animate.css/animate.min.css";
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'

//COMPONENTS
import Header from './components/header/header';
import MainTitle from './components/main/mainTitle';
import SmallGrow from './components/main/smallGrow';
import MainGrow from './components/main/mainGrow';

//PICTURES
import logo from '../src/img/growcast-fondo-transparente.png'
import mainPerspectiva from './img/main-perspectiva.png';
import hubPerspectiva from './img/hub-perspectiva.png';
import salidasPerspectiva from './img/salidas-perspectiva.png';
import Devices from './components/main/devices';
import AboutUs from './components/main/aboutUs';
import Gallery from './components/main/gallery';
import Footer from './components/footer/footer';

function App() {
  return (
    <ChakraProvider>
      <header>
        <Header logo={logo} ></Header>
      </header>

      <main>
        <MainTitle></MainTitle>
        <Flex justify={'space-around'} direction={'row'}>

          <Box display={{ base: "none", md: "block" }}> 
            <SmallGrow img1={hubPerspectiva} img2={salidasPerspectiva} inverse={false}></SmallGrow>
          </Box>

          <MainGrow img={mainPerspectiva}></MainGrow>

          <Box display={{ base: "none", md: "block" }}> 
            <SmallGrow img1={salidasPerspectiva} img2={hubPerspectiva} inverse={true}></SmallGrow>
          </Box>

        </Flex>

        <Box backgroundColor={'#d5d4cf'} pt={'1rem'} pb={'1rem'}>
          <Devices></Devices>
        </Box>

        <Gallery></Gallery>
        <AboutUs></AboutUs>

        
      </main>

      

      <footer>
        <Footer></Footer>
      </footer>

    </ChakraProvider>
  );
}

export default App;
