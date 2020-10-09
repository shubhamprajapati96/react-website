import React from 'react';
import { NavLink } from 'react-router-dom';
const Common = (props) => {
    return (<>
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 hero-heading">
                                <h1 className="my-1">{props.name} <strong className="brand-name">Shubham Blog</strong></h1>
                                <h2 className="mt-2">
                                    We are the team of talented developer and making website.
                                </h2>
                                <div className="mt-3">
                                    <NavLink className="btn btn-primary" exact to={props.visit}>{props.btnName}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 hero-img">
                                <img src={props.imgsrc} className="img-fluid text-right" alt="Home" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);

};

export default Common;
