import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    return <AppContext value={{

    }} >
        {props.children}
    </AppContext>
}