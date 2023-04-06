import About from './components/about';
import ReactDOM from "react-dom";
import Photo from './Images/Photo.jpg';
import contact from './components/contact';
import Gallery from './components/gallery';
import Background from './Images/Back.png';
function App() {



  return (
    <div class="relative">
        <img src={Background} className='w-full' alt='background'/>

        <div className='container flex justify-center flex-wrap space-x-4'>
          <h1 class="absolute text-5xl text-black top-2 left-1/3 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl bg-gray-200 drop-shadow-lg" id='Contact'>
          <a href="/contact" >Contact </a></h1>
          <h1 class="absolute text-5xl text-red top-2 left-2/4 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl bg-gray-200 drop-shadow-lg" id='About'>
          <a href="/About"> About </a> </h1>
          <h1 class="absolute text-5xl text-red top-2 left-3/4 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl bg-gray-200 drop-shadow-lg" id='Gallery'>
          <a href='/gallery' > Gallery </a></h1>
          <h1 class="absolute text-5xl text-red top-2 right-1/4 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl bg-gray-200 drop-shadow-xl" id='Download'>
          <a href='/download' > Download </a></h1>
        href
          <p className='mt-96'> teer</p>
        </div>
    </div>

  );
}
export default App;