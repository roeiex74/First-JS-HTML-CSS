import * as React from 'react';
import '../App.css';

const Header = ({ CurHead, date, children }) => {
    return (
        <header className='App-header'>
            <img src={'/Website_logo.png'} className='App-logo' alt='logo' />
        </header>
    );
};

export default Header;
