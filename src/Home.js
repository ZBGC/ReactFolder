import About from './components/about';
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Photo from './Images/Photo.jpg';
import contact from './components/contact';
import Gallery from './components/gallery';
import Background from './Images/Back.png';
function App() {



  return (
    <BrowserRouter>
    <div class="relative">
        <img src={Background} className='w-full'/>

        <div className='container flex justify-center flex-wrap space-x-4'>
          <h1 class="absolute text-5xl text-black top-2 left-1/3 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl bg-gray-200 drop-shadow-lg" id='Contact'>
          <Link to="/contact" >Contact </Link></h1>
          <h1 class="absolute text-5xl text-red top-2 left-2/4 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl bg-gray-200 drop-shadow-lg" id='About'>
          <Link to="/About"> About </Link> </h1>
          <h1 class="absolute text-5xl text-red top-2 left-3/4 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl bg-gray-200 drop-shadow-lg" id='Gallery'>
          <Link to='/gallery' > Gallery </Link></h1>
          <h1 class="absolute text-5xl text-red top-2 right-1/4 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl bg-gray-200 drop-shadow-xl" id='Download'>
          <Link to ='/download' > Download </Link></h1>
          

          <p className='mt-96'> teer</p>
        </div>
    </div>
      
      
    
        <Routes>
          <Route path="/contact" element={<contact/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </BrowserRouter>

  );
}
export default App;