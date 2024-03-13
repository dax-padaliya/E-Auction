import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [registrationStatus, setRegistrationStatus] = useState({
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all fields are not empty
        if (user.username.trim() === '' || user.email.trim() === '' || user.password.trim() === '') {
            setRegistrationStatus({
                success: false,
                message: 'Please fill in all fields.'
            });
            return;
        }

        try {
            // Make a POST request to the signup endpoint
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                // Handle success
                const responseData = await response.json();
                setRegistrationStatus({
                    success: true,
                    message: responseData.data
                });
            } else {
                // Handle error
                const errorData = await response.json();
                setRegistrationStatus({
                    success: false,
                    message: `Error during signup: ${errorData.error}`
                });
            }

        } catch (error) {
            // Handle network errors or other exceptions
            setRegistrationStatus({
                success: false,
                message: `Error during signup: ${error.message}`
            });
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {registrationStatus.message && (
                <div className={registrationStatus.success ? 'success-message' : 'error-message'}>
                    {registrationStatus.message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" className="unamme" name="username" value={user.username} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" className="email" value={user.email} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" className="psw" value={user.password} onChange={handleChange} />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
