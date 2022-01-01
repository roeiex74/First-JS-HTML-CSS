import * as React from 'react';
import './Social-Media.scss';

const SocialMedia = ({}) => {
    return (
        <body
            class='page-class'
            style={{
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                scrollBehavior: 'smooth',
                backgroundImage: 'url(/New_Socia.jpg)',
            }}
        >
            <div class='social-body'>
                <div class='container'>
                    <header>
                        <h1>Follow Me On Social Media</h1>
                    </header>
                    <ul class='accordion'>
                        <li class='tab'>
                            <div class='social instagram'>
                                <a href='https://www.instagram.com/roeir5/' target='_blank' rel='noreferrer'>
                                    Instagram
                                </a>
                            </div>
                            <div class='content'>
                                <h1>Instagram</h1>
                                <p>Follow me on Instagram</p>
                            </div>
                        </li>
                        <li class='tab'>
                            <div class='social linkedin'>
                                <a href='https://il.linkedin.com/in/roei-rahamim-188055153' target='_blank' rel='noreferrer'>
                                    LinkedIn
                                </a>
                            </div>
                            <div class='content'>
                                <h1>LinkedIn</h1>
                                <p>Follow me on Linkedin</p>
                            </div>
                        </li>
                        <li class='tab'>
                            <div class='social facebook'>
                                <a href='https://he-il.facebook.com/roeirahamim1' target='_blank' rel='noreferrer'>
                                    Facebook
                                </a>
                            </div>
                            <div class='content'>
                                <h1>Facebook</h1>
                                <p>Follow me on Facebook</p>
                            </div>
                        </li>
                        <li class='tab'>
                            <div class='social snapchat'>
                                <a href='https://www.snapchat.com/add/roeiex74' target='_blank' rel='noreferrer'>
                                    Snapchat
                                </a>
                            </div>
                            <div class='content'>
                                <h1>Snapchat</h1>
                                <p>add me on Snapchat</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class='center-fixed' style={{ alignItems: 'center', textAlign: 'center', marginTop: '20%', position: 'fixed' }}>
                <h2 style={{ color: 'white', marginBottom: '20px' }}>Send me an email!</h2>
                <div class='contact-div' id='container2'>
                    <button class='learn-more2' onClick={() => (window.location.href = '/Contact')}>
                        <span class='circle2' aria-hidden='true'>
                            <span class='icon2 arrow2'></span>
                        </span>
                        <span class='contact-text'>Contact me</span>
                    </button>
                </div>
            </div>
        </body>
    );
};

export default SocialMedia;
