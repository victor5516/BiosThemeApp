import { useTheme } from "../context/ThemeContext";
import THEMES from '../utils/constants';

const { LIGHT } = THEMES

const ThemedButton = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === LIGHT ? '#fff' : '#333',
                color: theme === LIGHT ? '#333' : '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            >
                Cambiar a tema {theme === LIGHT ? 'oscuro' : 'claro'}
            </button>
    );
}

export default ThemedButton