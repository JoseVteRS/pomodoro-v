import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SettingProvider } from './context/setting-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SettingProvider>
      <App />
  </SettingProvider>,
)
