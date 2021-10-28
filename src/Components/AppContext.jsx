import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
}