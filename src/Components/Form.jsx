import React from 'react';

const Form = () => {

    const handleChange = e => { }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={() => handleChange} required="required" />
            <button>Shorten it!</button>
        </form>
    )
}

export default Form;