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
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (!value) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }

        if (name === 'email' && value && !validateEmail(value)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Please enter a valid email'
            }));
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Only handle form submission logic here
        if (name && email && validateEmail(email) && message) {
            console.log('Form submitted', formData);
        } else {
            // Optional: Handle form submission failure if needed
            console.log('Form validation failed');
        }
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
                <input type='text' name='name' value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type='text' name='email' value={formData.email} onChange={handleChange} onBlur={handleBlur}  />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div className='form-group'>
                <label>Message</label>
                <textarea name='message' value={formData.message} onChange={handleChange} onBlur={handleBlur}  />
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