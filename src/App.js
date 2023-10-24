//STYLES
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header>
        <Header logo={logo} ></Header>
      </header>
      <main>
        <MainTitle></MainTitle>
        <div className="growContainer">
          <SmallGrow img1={hubPerspectiva} img2={salidasPerspectiva}></SmallGrow>
          <MainGrow img={mainPerspectiva}></MainGrow>
          <SmallGrow img1={salidasPerspectiva} img2={hubPerspectiva}></SmallGrow>
        </div>
      </main>
    </div>
  );
}

export default App;
