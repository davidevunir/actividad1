import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Provider } from 'react-redux';
import {index} from "./service/store/index.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={index} />
      <App/>
    </StrictMode>,
)
