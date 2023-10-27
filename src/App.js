// import logo from './logo.svg';
import './App.css';
import BlogComponent from './Blog project/BlogComponent';
import ColorSchemesExample from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parallax from './ParallaxEffect Project/Parallax';
import ScrollPage from './Infinite Scroll Page/ScrollPage';
import ScrollAnim from './Scroll Animation/ScrollAnim';
import Color from './ColorReact/Color';
import DarkMode from './DarkLight Toggle/DarkMode';
import NetWork from './Network Status/Network';
import Game from './Tic Toc Toe Game/Game';
import Chat from './Chatbot/Chat';
import Wheather from './Wheather/Wheather';



function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
     <BrowserRouter>
      <Routes>
          <Route index element={<BlogComponent />} />
          <Route path="blogs" element={<BlogComponent />} />
          <Route path="parallax" element={<Parallax />} />
          <Route path="scroll" element={<ScrollPage />} />
          <Route path="scrollanim" element={<ScrollAnim />} />
          <Route path="color" element={<Color />} />
          <Route path="network" element={<NetWork />} />
          <Route path="darkmode" element={<DarkMode />} />
          <Route path="game" element={<Game />} />
          <Route path="chatbot" element={<Chat/>} />
          <Route path="weather" element={<Wheather/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
