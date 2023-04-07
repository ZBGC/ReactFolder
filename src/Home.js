import About from './components/about';
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Photo from './Images/Photo.jpg';
import contact from './components/contact';
import Gallery from './components/gallery';
import video from "./Images/videoplayback.mp4";
function App() {



  return (
  
    <div class = "relative">


    
         
      <video src = {video} autoPlay loop muted /> 
      <nav id='block'> 
        <ul id='block' >
          <li id= "block">
          Buy The Game
          </li>
          <li id='block'> 
           Watch the Trailer 
          </li>
          <li id='block'>
             Gallery
          </li>
          
        </ul>
      </nav>
        
          
        
    </div>
      
      
    
  );
}
export default App;