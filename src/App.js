import ReactDOM from "react-dom";
import Photo from './Images/Photo.jpg';
import scrollElement from "react-scroll/modules/mixins/scroll-element";
import { Link, animateScroll as scroll } from "react-scroll";

import Home from './Home';
import About from './components/about';

export default function App() {
  return (
    <div className="App">
      <Home/>
    
    </div>
  );
}