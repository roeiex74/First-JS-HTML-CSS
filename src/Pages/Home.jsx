/* eslint-disable no-sequences */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react';
import './Home.scss';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Aboutme from './About-me';
import ImagesGallery from './ImageGallery';
import Experience from './Experience';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log('end', arguments);
        });
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }
    scrollToWithContainer() {
        let goToContainer = new Promise((resolve, reject) => {
            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container',
            }),
        );
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
}
const Home = ({}) => {
    const [aboutme, setAboutMe] = React.useState(false);
    const [whoami, setWhoAmI] = React.useState(false);
    const [hobbies, setHobbies] = React.useState(false);
    const [exprience, setExprience] = React.useState(false);

    function rafAsync() {
        return new Promise(resolve => {
            requestAnimationFrame(resolve); //faster than set time out
        });
    }

    function checkElement(selector) {
        if (document.querySelector(selector) === null) {
            return rafAsync().then(() => checkElement(selector));
        } else {
            return Promise.resolve(true);
        }
    }
    const ClickAboutme = e => {
        setAboutMe(true);
        checkElement('aboutme');

        scroll.scrollTo(892);
        return true;
    };
    const ClickWhoAmI = () => {
        setWhoAmI(true);
        setHobbies(false);
        setExprience(false);
    };
    const ClickHobbies = () => {
        setWhoAmI(false);
        setHobbies(true);
        setExprience(false);
    };
    const ClickDont = () => {
        setWhoAmI(false);
        setHobbies(false);
        setExprience(true);
    };
    return (
        <html>
            <body class='html-page' style={{ scrollBehavior: 'smooth', backgroundImage: 'url(/HomeBackground2.jpeg)' }}>
                <div class='home-div'>
                    <div class='welcome-div'>
                        <h1 class='jt --debug'>
                            <span class='jt__row'>
                                <span class='jt__text'>Welcome</span>
                            </span>
                            <span class='jt__row jt__row--sibling' aria-hidden='true'>
                                <span class='jt__text'>Welcome</span>
                            </span>
                            <span class='jt__row jt__row--sibling' aria-hidden='true'>
                                <span class='jt__text'>Welcome</span>
                            </span>
                            <span class='jt__row jt__row--sibling' aria-hidden='true'>
                                <span class='jt__text'>Welcome</span>
                            </span>
                        </h1>
                    </div>

                    <div class='menu-div' id='container'>
                        <button class='learn-more' to='aboutme' onClick={e => ClickAboutme(e.target.to)}>
                            <span class='circle' aria-hidden='true'>
                                <span class='icon arrow'></span>
                            </span>
                            <span class='learn-text'>Explore</span>
                        </button>
                    </div>
                </div>
            </body>
            {aboutme && (
                <body class='extended-body'>
                    <div class='extended-header' style={{ marginTop: '10px' }}>
                        <blockquote class='extended-block'>Excuse the Rumors, Let Me Introduce Myself</blockquote>
                    </div>
                    <div class='extended-container'>
                        <div style={{ marginRight: '10px' }}>
                            <button class='extended-btn' onClick={() => ClickWhoAmI()}>
                                WhoAmI
                            </button>
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <button class='extended-btn' onClick={() => ClickHobbies()}>
                                Hobbies
                            </button>
                        </div>
                        <div>
                            <button class='extended-btn' onClick={() => ClickDont()}>
                                Experience
                            </button>
                        </div>
                    </div>
                    {whoami && <Aboutme />}
                    {hobbies && <ImagesGallery />}
                    {exprience && <Experience />}
                </body>
            )}
        </html>
    );
};

export default Home;
