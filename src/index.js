import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './index.css';
import App from './components/App';
import ForgotPassword from './containers/ForgotPassword';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
<Provider store= {store}>
{/* <App /> */}
<div>
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/forgot_password" component={ForgotPassword}/>
        </div>
    </Router>
</div>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
