import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AnchorLink from 'react-anchor-link-smooth-scroll'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//When building your function:

//Assume your users will watch exactly two movies
//Don't make your users watch the same movie twice
//Optimize for runtime over memory
