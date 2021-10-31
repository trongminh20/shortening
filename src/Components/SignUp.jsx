import React from 'react';

export default function Login() {
    const handleChange = e => { }
    const handleSubmit = e => { }

    return <form className="signup-form" onSubmit={() => handleSubmit}>
        <input className="signup-input" type="text" name="username" />
        <input className="signup-password" type="password" name="password" />
        <input className="signup-btn" type="submit" name="submit-login" value="Sign Up" />
    </form>
}