import  { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types';
import THEMES from '../utils/constants';

const { LIGHT, DARK } = THEMES

const ThemeContext = createContext(LIGHT); // Valor predeterminado: 'light'

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(LIGHT)

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT ))
    }

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const useTheme = () => useContext(ThemeContext)
