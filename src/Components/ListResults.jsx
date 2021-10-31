import React from 'react';
import Form from './Form';
import Result from "./Result";

export default function ListResult() {

    return <section>
        <Form />
        <div className="list-result">
            <Result />
        </div>
    </section>
}