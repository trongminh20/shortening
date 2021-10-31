import React from 'react';

export default function Login() {
    const handleChange = e => { }
    const handleSubmit = e => { }

    return <form className="login-form" onSubmit={() => handleSubmit}>
        <input className="login-input" type="text" name="username" />
        <input className="login-password" type="password" name="password" />
        <input className="login-btn" type="submit" name="submit-login" value="Login" />
    </form>
}