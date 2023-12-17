import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContext from './context/themeContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeContext>
      <App />
    </ThemeContext>
  </BrowserRouter>
)
