import { ThemeProvider } from './context/ThemeContext'
import ThemedButton from './components/ThemedButton'
import Header from './components/Header'


function App() {


  return (
    <ThemeProvider>
      <div style={{
        padding: '20px'
      }}>
        <Header/>
        <div style={{
          marginTop: '20px',
          textAlign: 'center'
        }}>
          <ThemedButton/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
