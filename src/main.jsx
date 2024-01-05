import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import AdminNotificationProvider from './providers/AdminNotificationProvider.jsx'
import LoginRegisterProvider from './providers/LoginRegisterProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminNotificationProvider>
      <LoginRegisterProvider>
        <App />
      </LoginRegisterProvider>
    </AdminNotificationProvider>
  </React.StrictMode>,
)
