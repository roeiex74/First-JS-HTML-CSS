import * as React from 'react';
import './About-me.scss';

const Aboutme = ({}) => {
    const [src, setSrc] = React.useState('/AboutMeUnhover.jpg');
    const hover = () => setSrc('/AboutMeHover.JPG');
    const unhover = () => setSrc('/AboutMeUnhover.jpg');

    return (
        <header>
            <body>
                <img
                    src={src}
                    class='Aboutme-img'
                    textAlign
                    width='300'
                    height='250'
                    alt='logo'
                    style={{ marginTop: 0 }}
                    onMouseOut={() => unhover()}
                    onMouseOver={() => hover()}
                />
                <div class='unitheadline'>
                    <div class='subp'>
                        <p style={{ color: 'snow' }}>
                            Hello , and welcome to my website!
                            <br />
                            Nice to meet you!
                            <br />
                        </p>
                        <p style={{ color: 'snow' }}>
                            {' '}
                            My name is Roei and i am a CS-Enterpeunership Student at Reichman university.
                            <br />
                            Also, i am a Monitoring solution architect at BANK HAPOALIM LTD.
                            <br />
                        </p>
                        <p style={{ color: 'snow' }}>
                            on top of that , i play handball proffesionally at 'Hapoel Ramat Gan'.
                            <br />
                            You are more than invited to tour around the website and contact me if you liked some of my work!
                        </p>
                    </div>
                </div>
            </body>
        </header>
    );
};

export default Aboutme;
