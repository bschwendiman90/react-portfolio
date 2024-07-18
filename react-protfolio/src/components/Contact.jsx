import React, {useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErros] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


const handleBlur = (e) => {
    const {name, value} = e.target;
    if (!value) {
        setErrors({
            ...errors,
            [name]: '${name} is required'
        });
    } else {
        setErrors({
            ...errors,
            [name]: ''
        });
    }
};

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
        setErrors({
            ...errors,
            email: 'Please enter a valid email'
        });
    } else {
        console.log('Form submitted', formData);
    }
};

return (
    <section>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' name='name' value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Email</label>
                <input type='text' name='email' value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Message</label>
                <textarea name='message' value={formData.message} onChange={handleChange} onBlur={handleBlur} />
                {errors.message && <span>{errors.message}</span>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </section>
);
};

export default Contact;