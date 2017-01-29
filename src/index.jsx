import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

let options = {
    'url': 'https://openexchangerates.org/api/latest.json?app_id=f6a6b00781654a1bb1c07706f3019366'
};

render(<App url={options.url}/>, document.querySelector('#app'));
