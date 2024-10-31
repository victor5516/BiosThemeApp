import { useTheme } from "../context/ThemeContext";
import THEMES from "../utils/constants";
const { LIGHT } = THEMES

const Header = () => {
    const { theme } = useTheme();

    return (
        <header
        style={{
            backgroundColor: theme === LIGHT ? '#f0f0f0' : '#222',
            color: theme === LIGHT ? '#222' : '#f0f0f0',
            padding: '20px',
            textAlign: 'center'
        }}
        >
            <h1>
                Aplicacion con tema {theme=== LIGHT ? 'claro' : 'oscuro'}
            </h1>
         </header>
    )
}

export default Header;