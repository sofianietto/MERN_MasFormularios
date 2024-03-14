import React, { useState } from 'react';


const UserForm = props => {  
    const { inputs, setInputs } = props;


    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value

        })
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };

    

    return (
        <form onSubmit={createUser}>
            <div className='mb-3'>
                <label 
                    htmlFor="exampleInputEmail1" 
                    className="form-label">FirstName: 
                </label>
                <input 
                    type="text" 
                    name="firstname"
                    className="form-control" 
                    id="exampleInputUsername" 
                    aria-describedby="emailHelp" 
                    onChange={onChange} />
            </div>
            <div className='mb-3'>
                <label 
                    htmlFor="exampleInputEmail1"
                    className="form-label">LastName: 
                </label>
                <input 
                    type="text" 
                    name="lastname"
                    className="form-control" 
                    id="exampleInputUsername" 
                    aria-describedby="emailHelp" 
                    onChange={onChange} />
            </div>
            <div className='mb-3'>
                <label 
                    htmlFor="exampleInputEmail1" 
                    className="form-label">Email Address: 
                </label>
                <input 
                    type="email"
                    name="email"
                    className="form-control" 
                    id="exampleInputEmail" 
                    aria-describedby="emailHelp" 
                    onChange={onChange} />
            </div>
            <div className='mb-3'>
                <label 
                    htmlFor="exampleInputPassword1" 
                    className="form-label">Password: 
                </label>
                <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    id="exampleInputPassword1" 
                    onChange={onChange} />
            </div>
            <div className='mb-3'>
                <label 
                    htmlFor="exampleInputPassword1" 
                    className="form-label">Confirm Password: 
                </label>
                <input 
                    type="password" 
                    name="confirmpassword"
                    className="form-control" 
                    id="exampleInputPassword1" 
                    onChange={onChange} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;
