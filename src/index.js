import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgesNew';
import Badges from './pages/Badges';
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app');

ReactDOM.render(<App/>, container);
