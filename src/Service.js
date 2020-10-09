import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
    return (<>
        <section id="header" className="">
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card key={ind}
                                        imgsrc={val.imageSrc} title={val.title}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);

};

export default Service;
