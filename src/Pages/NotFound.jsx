import * as React from 'react';

const NotFound = ({}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h1>404 Page Not Found!</h1>
            <img src='/NotFound.jpg' alt='NotFound' style={{ width: '500px' }} />
            <div class='center-button'>
                <button class='button button-block' value='Contact' title='contact' onClick={() => (window.location.href = '/Home')}>
                    <span class='button-label'>Return Home</span>
                </button>
            </div>
        </div>
    );
};

export default NotFound;
