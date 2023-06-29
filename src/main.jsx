import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TimerProvider } from './context/TimerContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TimerProvider>
    <App />
  </TimerProvider>,
)
