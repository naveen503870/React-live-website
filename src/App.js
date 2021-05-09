import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css'
import Contact from './Contact';
import  Home from './Home';
import Navbar from './Navbar';
import Todo from './Todo';
import Footer from './Footer';
import Corona from './Corona';
// import Contactus from './Contactus';

const App = () => {
return(
<>
<Navbar />
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/corona" component={Corona} />
<Route exact path="/todo" component={Todo} />
<Route exact path="/contact" component={Contact} />
{/* <Route exact path="/contactus" component={Contactus} /> */}

<Redirect to="/" />
</Switch>
<Footer />
</>
);

};
export default App;