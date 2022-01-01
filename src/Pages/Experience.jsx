import * as React from 'react';
import './Experience.css';

const Experience = ({}) => {
    return (
        <div class='experience-body'>
            <div class='bnhp-body'>
                <div>
                    <img
                        src='https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_100_100/0/1561277330815?e=1649289600&amp;v=beta&amp;t=EXk2RUbIENHmetYM8O7jcMhkTChANTB5fni22xg6swc'
                        loading='lazy'
                        alt='Bank Hapoalim בנק הפועלים'
                        style={{ marginLeft: '10px', marginTop: '10px', height: '80px' }}
                    />
                </div>
                <div>
                    <h3 style={{ marginLeft: '20px', marginBottom: '8px', marginTop: '10px' }}>ESM Specialist</h3>
                    <h4 style={{ marginLeft: '20px', marginBottom: '0px', marginTop: '4px' }}>Bank Hapoalim</h4>
                    <h6 style={{ marginLeft: '20px', marginBottom: '4px', marginTop: '2px', color:'grey' }}>2018-present</h6>
                </div>
                <div style={{ marginLeft: '40px' }}>
                    <p style={{ marginBottom: '8px', marginTop: '10px', marginLeft: '40px' }}>
                        Senior IT Monitronig Soltuions professional.
                        <br />
                        certified Network and System Administrator.
                        <br />
                        Extensive background in monitoring solutions
                    </p>
                </div>
            </div>
            <div class='idf-body'>
                <div>
                    <img
                        src='https://media-exp1.licdn.com/dms/image/C560BAQF7f5xcGJHcrQ/company-logo_100_100/0/1584545047702?e=1649289600&amp;v=beta&amp;t=uTj9QwKqx5u_3YkA_AdlXe6OXbO4wZeXtQAR6tZSGTc'
                        loading='lazy'
                        alt='IAF - Israeli Air Force'
                        style={{ borderRadius: '10px', height: '80px', marginLeft: '10px' }}
                    />
                </div>
                <div style={{ marginRight: '10px' }}>
                    <h3 style={{ marginLeft: '20px', marginBottom: '8px', marginTop: 0 }}>Dev Ops Automation and Monitoring</h3>
                    <h4 style={{ marginLeft: '20px', marginBottom: '0px', marginTop: '4px' }}>IDF</h4>
                    <h6 style={{ marginLeft: '20px', marginBottom: '4px', marginTop: '2px', color:'grey' }}>2014-2018</h6>
                </div>
                <div>
                    <p style={{ marginBottom: '8px', marginTop: '3px', marginLeft: '37px' }}>
                        Experience in administrating , implementing and developing
                        <br />
                        a wide variety of both
                        <br />
                        server and network monitoring solutions in
                        <br />
                        multiple large enterprise enviroments.
                        <br />
                        Supporting IBM Tivoli Suite and IBM products,Microsoft monitoring products and self-developed products
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
