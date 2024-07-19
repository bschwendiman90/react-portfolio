import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'




const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name) {
        window.alert('Name is required');
        return;
    }

    if (!email) {
        window.alert('Email is required');
        return;
    }

    if (!validateEmail(email)) {
        window.alert('Please enter a valid email');
        return;
    }

    if (!message) {
        window.alert('Message is required');
        return;
    }

    console.log('Form submitted', formData);
};

return (
    <section className='contact'>
        <div className="form-container">

        <h2>Contact Me</h2>
        <div className="contact-wrapper">
            <div className="contact-form">
        <h3>Send us a message</h3>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' name='name' value={formData.name} onChange={handleChange}  />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type='text' name='email' value={formData.email} onChange={handleChange}  />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div className='form-group'>
                <label>Message</label>
                <textarea name='message' value={formData.message} onChange={handleChange}  />
                {errors.message && <span>{errors.message}</span>}
            </div>
            <button type='submit'>Send Message</button>
        </form>

            </div>
            <div className="contact-info">
                <h3>
                    Contact Information
                </h3>
                <p>
                <FontAwesomeIcon icon={faPhone} className='contact-icon' /> +1 (801) 851-0792
                </p>
                <p>
                <FontAwesomeIcon icon={faEnvelope} className='contact-icon' /> bschwendiman90@gmail.com
                </p>
            </div>
        </div>
        </div>
    </section>
);
};

export default Contact;