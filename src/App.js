
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/resume" Component={Resume}></Route>
        <Route path="/portfolio" Component={Portfolio}></Route>
     </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
