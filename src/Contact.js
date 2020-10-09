import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is : ${data.fullname}. My phone number is : ${data.phone} and Email address : ${data.email}. Here is my message : ${data.msg}`);
    };

    return (<>
        <section id="header" className="">
            <div className="my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter full name" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter phone number" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="Enter email address" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" rows="3" name="msg" value={data.msg} onChange={InputEvent} placeholder="Message..." required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);

};

export default Contact;
