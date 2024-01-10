import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContext from './context/themeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import AlertContext from './context/AlertContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AlertContext>
      <ThemeContext>
        <App />
      </ThemeContext>
    </AlertContext>
  </BrowserRouter>
)
