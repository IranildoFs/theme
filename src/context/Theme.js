import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const themes = [
    {
        name:'dark',
        colors:{
            background: 'black',
            text: 'white',
        }   
    },
    {
        name:'light',
        colors:{
            background: 'white',
            text: 'black',
        }   
    }
]
//Crio o provider aqui para ficar mais limpo a apresentacao do App.js
export default function ThemeProvider({children}){
    const [ theme, setTheme] = useState(themes[0]);

    return (
        <ThemeContext.Provider
            value={{theme, setTheme}}
        >
            {children}

        </ThemeContext.Provider>
    )
}

//ws
export function useTheme(){
    const context = useContext(ThemeContext);
    const { theme, setTheme} = context;
    return { theme, setTheme};
}

