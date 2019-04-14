import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Dashboard = () => (
    <div>
        <h2>Dashboard</h2>
    
    </div>
)
const About = () => (
    <div>
        <h2>About</h2>
    </div>
)
const Post = ({match}) => (
    <div>
        <h2>Post #{match.params.id}</h2>
    </div>
)

ReactDOM.render(
<Router>
    <div>
        <aside>
            <Link to={`/dashboard`}>Dashboard</Link>
            <Link to={`/about`}>About</Link>
        </aside>
        <main>
            <Route exact path="/" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/(about|who)/" component={Dashboard} />
            <Route exact path="/post/:id" component={Post} />
        </main>
    </div>
<App />
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
