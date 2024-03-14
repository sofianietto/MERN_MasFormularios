import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");

    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conpasswordError, setConpasswordError] = useState("");

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstnameError("El campo debe tener al menos dos caracteres!");
        } 
        else {
            setFirstnameError('');
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameError("El campo debe tener al menos dos caracteres!");
        } 
        else {
            setLastnameError('');
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("El campo debe tener al menos cinco caracteres!");
        } 
        else {
            setEmailError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("El campo debe tener al menos ocho caracteres!");
        } 
        else {
            setPasswordError('');
        }
    }

    const handleConpasswordError = (e) => {
        setConpassword(e.target.value);
        setPassword(e.target.value);
        if(setPassword != setConpassword) {
            setConpasswordError("no concuerda con la contraseña");
        } 
        else if (setPassword == setConpassword) {
            setConpasswordError('');
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, };
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConpassword("");
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
                    onChange={handleFirstname}
                    value={firstname} />
                    {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
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
                    onChange={handleLastname}
                    value={lastname} />
                    {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
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
                    onChange={handleEmail}
                    value={email} />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
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
                    onChange={handlePassword}
                    value={password} />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div className='mb-3'>

                <label htmlFor="exampleInputPassword1"
                    className="form-label">Confirm Password:
                </label>

                <input
                    type="password"
                    name="conpassword"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleConpasswordError}
                    value={conpassword} />
                    {
                    conpasswordError ?
                    <p style={{color:'red'}}>{ conpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;