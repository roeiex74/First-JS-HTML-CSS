import * as React from 'react';

const Thankyou = ({}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h1>YASSS</h1>
            <img src='/Thankyou.gif' alt='Thankyou' style={{ width: '500px' }} />
            <div class='center-button'>
                <button class='thankyou-button thankyoubutton-block' value='Contact' title='contact' onClick={() => (window.location.href = '/Home')}>
                    <span class='button-label'>Return Home</span>
                </button>
            </div>
        </div>
    );
};

export default Thankyou;
