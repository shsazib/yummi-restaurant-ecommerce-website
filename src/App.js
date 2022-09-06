import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Menu from './Pages/Menu/Menu';
import PageFAQ from './Pages/Page/FAQ/FAQ';
import PageOurTeams from './Pages/Page/OurTeams/OurTeams';
import Shop from './Pages/Shop/Shop';
import Error from './Pages/Error/Error';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route>
        <Route path="/faq" element={<PageFAQ />} />
        <Route path="/ourteams" element={<PageOurTeams />} />
      </Route>
      <Route path="/shop" element={<Shop />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;