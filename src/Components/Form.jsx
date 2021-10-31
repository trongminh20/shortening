import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';

export default function Form() {
    const handleSubmit = () => { }
    const handleChange = () => { }

    return <form onSubmit={() => handleSubmit()}>
        <input type="text" onChange={() => { handleChange() }} />
        <input type="submit" value="Shorten it!" />
    </form>
}