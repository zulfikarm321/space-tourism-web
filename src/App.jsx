import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Navbar from './components/Navbar';

function App() {
    const [appBackground, setAppBackground] = useState('');
    const [screen, setScreen] = useState('desktop');
    const location = useLocation().pathname;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 760) {
                setScreen('mobile');
            } else if (window.innerWidth <= 1200) {
                setScreen('tablet');
            } else {
                setScreen('desktop');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        if (location === '/') {
            setAppBackground(`url('/home/background-home-${screen}.jpg')`);
        } else if (location === '/destination') {
            setAppBackground(
                `url('/destination/background-destination-${screen}.jpg')`
            );
        } else if (location === '/crew') {
            setAppBackground(`url('/crew/background-crew-${screen}.jpg')`);
        } else if (location === '/technology') {
            setAppBackground(
                `url('/technology/background-technology-${screen}.jpg')`
            );
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [location, screen]);

    return (
        <div className="app" style={{ backgroundImage: appBackground }}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
