import React from 'react';
import { render } from 'react-dom';
import Routes from './router/routes.js';
import './css/styles.scss'

render(
    <Routes/>,
    document.getElementById('root')
)