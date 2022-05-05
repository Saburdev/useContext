import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UsersContext from './context/UsersContext';

let name = 'Teshavoy'


const  app = (
    <React.StrictMode>
        <UsersContext.Provider value={ name } children = {<App/>}/>  
    </React.StrictMode>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)