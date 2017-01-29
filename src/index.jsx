import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';

import configureStore from './redux/configureStore';

const store = configureStore();
let options = {
    'url': 'https://openexchangerates.org/api/latest.json?app_id=f6a6b00781654a1bb1c07706f3019366'
};

render(<Provider store={store}><App url={options.url}/></Provider>, document.querySelector('#app'));
