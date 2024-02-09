import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path="/react-portfolio" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/react-portfolio/portfolio' element={<Portfolio/>} />
      <Route path='/react-portfolio/about' element={<About/>} />
      <Route path='/react-portfolio/contact' element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
