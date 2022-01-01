import './App.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import NavBar2 from './Layout/NavBar';
import { Route, Routes } from 'react-router-dom';
import Validation from './Pages/ContactForm';
import Home from './Pages/Home';
import Aboutme from './Pages/About-me';
import NotFound from './Pages/NotFound';
import Thankyou from './Pages/Thankyou';
import SocialMedia from './Pages/Social-Media';

function App() {
    return (
        <div>
            <div>
                <NavBar2 />
                <div style={{ marginTop: 70, marginBottom: 0 }}>
                    <Header />
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route exact path='/Contact' element={<Validation />} />
                    <Route path='/Thankyou' element={<Thankyou />} />
                    <Route path='/Social-Media' element={<SocialMedia />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
