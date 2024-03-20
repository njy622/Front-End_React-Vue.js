import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> 해당부분은 디버깅을 위한 태그로 생략해도 문제없음
    <App />
  // </React.StrictMode>,
)
