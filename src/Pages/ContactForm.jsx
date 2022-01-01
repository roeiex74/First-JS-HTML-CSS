import * as React from 'react';
import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import ReactDOM from 'react-dom';
import { ErrorMessage } from '@hookform/error-message';
import './ContactForm.css';
import { isValidPhoneNumber } from 'libphonenumber-js/core';

const ContactForm = ({}) => {
    const [errorMsg, setErrorMsg] = React.useState('');
    const [phonenum, SetPhoneNum] = React.useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ criteriaMode: 'all' });

    const onSubmit = data => {
        console.log(data);
        let subject = 'Regarding your Website';
        let Mbody =
            'Hi! my name is ' +
            data.firstName +
            ' ' +
            data.lastName +
            ' And I am ' +
            data.age +
            ' Years old.%0d%0aThis is what i think about your website:%0d%0a';
        let lines = data.opinion.split('\n');
        let i;
        for (i = 0; i < lines.length; i++) {
            Mbody += lines[i] + '%0d%0a';
        }
        Mbody += 'My contact info: %0d%0a Phone number: ' + data.phone + '%0d%0a Email Address: ' + data.email;
        setErrorMsg('');
        window.open('mailto:roeiex74@gmail.com?Subject=' + subject + '&body=' + Mbody, '_blank');
        window.location.href = '/Thankyou';
    };
    const onChange = e => {
        const firstName = e.target.value;
    };
    return (
        <body class='contact-body'>
            <form class='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <div class='same-line-name'>
                    <div style={{ marginRight: '20px', width: '40%' }}>
                        <label>
                            <b>First Name</b>
                        </label>
                        <input
                            class='form-input'
                            defaultValue='Tami'
                            onChange={onChange}
                            {...register('firstName', {
                                required: 'This input is required.',
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name='firstName'
                            render={({ messages }) => {
                                console.log('messages', messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                          <p class='p-error' key={type}>
                                              {message}
                                          </p>
                                      ))
                                    : null;
                            }}
                        />
                        {errorMsg && <p class='p-error'>{errorMsg}</p>}
                    </div>
                    <div style={{ marginBottom: 10, width: '40%' }}>
                        <label>
                            <b>Last Name</b>
                        </label>
                        <input class='form-input' defaultValue='Tamir' {...register('lastName', { required: 'This input is required.' })} />
                        <ErrorMessage
                            errors={errors}
                            name='lastName'
                            render={({ messages }) => {
                                console.log('messages', messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                          <p class='p-error' key={type}>
                                              {message}
                                          </p>
                                      ))
                                    : null;
                            }}
                        />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <label>
                            <b>Age</b>
                        </label>
                        <input
                            class='form-input'
                            type='number'
                            min={0}
                            {...register('age', {
                                required: 'This input is required.',
                                pattern: {
                                    value: /\d+/,
                                    message: 'Age must be an integer',
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name='age'
                            render={({ messages }) => {
                                console.log('messages', messages);
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                          <p class='p-error' key={type}>
                                              {message}
                                          </p>
                                      ))
                                    : null;
                            }}
                        />
                    </div>
                </div>
                <div style={{ marginBottom: 30 }}>
                    <label>
                        <b>Email Address</b>
                    </label>
                    <input
                        class='form-input'
                        {...register('email', {
                            required: 'This input is required.',
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Enter a valid email address.',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name='email'
                        render={({ messages }) => {
                            console.log('messages', messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p class='p-error' key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </div>
                <div>
                    <PhoneInput
                        class='form-input'
                        defaultCountry='IL'
                        placeholder='Enter phone number'
                        value={phonenum}
                        error={phonenum ? (isValidPhoneNumber(phonenum) ? undefined : 'Invalid phone number') : 'Phone number required'}
                        onChange={SetPhoneNum}
                        {...register('phone', {
                            required: 'This input is required.',
                            minLength: {
                                value: 9,
                                message: 'Phone is too short',
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name='phone'
                        render={({ messages }) => {
                            console.log('messages', messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p class='p-error' key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                    {errors['phone'] && <p className='p-error'>Invalid Phone</p>}
                </div>
                <div>
                    <label>
                        <b>What did you think ?</b>
                    </label>
                    <textarea
                        rows='5'
                        cols='60'
                        name='opinion'
                        class='form-input'
                        {...register('opinion', {
                            required: 'This input is required.',
                        })}
                    >
                        Tell us what did you think here...
                    </textarea>
                    <ErrorMessage
                        errors={errors}
                        name='opinion'
                        render={({ messages }) => {
                            console.log('messages', messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p class='p-error' key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </div>
                <input class='form-input' type='submit' />
            </form>
        </body>
    );
};

export default ContactForm;
const rootElement = document.getElementById('root');
ReactDOM.render(<ContactForm />, rootElement);
