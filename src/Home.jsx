import React from 'react';
import web from './image/rocket.jpg';
import {NavLink} from 'react-router-dom';


const Home = () => {
return(
<>
<sction id="header" className="maindiv d-flex align-items-center mb-4">
<div className="container-fluid mb-4">
    <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="grow col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
        <h1>Grow your Knowledge with <strong className="brandmid" ><br></br>Naveen kumar</strong></h1>
        <h2 className="we my-3"> we are team of telented developer making website</h2>
        <div className="mt-3">
         <NavLink to="/about" className="get">get started</NavLink>
</div>
</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
    <img src={web} className="img-fluid animated" alt="home img" />
</div>
</div>
</div>
</div>
</div>
</sction>
</>
);

};
export default Home;