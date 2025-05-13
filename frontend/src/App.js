import './styles/App.css';
import Navigation from './components/Navigation';
import elipseDesign from "./assets/Ellipse.png"



function App() {
  
  return (
    <>
    <div className='design-point-up z-[-1] pointer-events-none'></div>
      <Navigation />
    <div className='design-point-down'></div>
    </>
  );
}

export default App;