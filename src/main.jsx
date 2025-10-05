import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ModelsContext, ModelsProvider } from './context/ModelsContext.jsx'

createRoot(document.getElementById('root')).render(
  <ModelsProvider>
    <App />
  </ModelsProvider>,
)
