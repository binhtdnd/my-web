import PropTypes from 'prop-types'
import { useState } from 'react';
import axios from 'axios';

async function loginUser(credentials) {

    return fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),

    })
        .then(data => data.json())
}

export default function Login({ setToken }) {


    const [username, setUserName] = useState();
    const [password, setPasssWord] = useState();


    const [loginSwitch, setLoginSwitch] = useState(true)

    const onLoginBtn = async (e) => {
        e.preventDefault();

        const options = {
            method: 'GET',
            url: '/api/user',
            params: { username, password },
        }
        axios
            .request(options)
            .then(async function (response) {
                console.log(response.data.data.length)
                if (response.data.data.length > 0) {

                    const token = await loginUser({
                        username,
                        password
                    });
                    setToken(token);
                } else {
                    alert('wrong')
                }
            })
            .catch(function (error) {
                console.error(error);

            });
    }

    const onCreateBtn = async (e) => {
        e.preventDefault();

        const options = {
            method: 'GET',
            url: '/api/createUser',
            params: { username, password },
        }
        axios
            .request(options)
            .then(async function (response) {
                console.log(response.data.data.length)
                if (response.data.data.length === 0) {

                    const token = await loginUser({
                        username,
                        password
                    });
                    setToken(token);
                } else {
                    alert('tdn da ton tai')
                }
            })
            .catch(function (error) {
                console.error(error);

            });
    }


    return (
        <>
            {/* <div className='container-login' id='container-login'>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                            onChange={e => setUserName(e.target.value)}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                            onChange={e => setPasssWord(e.target.value)}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>

                </form>
                <button type="GET" className="btn btn-primary"
                    onClick={handleSubmit}
                >Submit</button>
            </div>
*/}
            <div id='form-login' className='container mt-3'>


                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-sm-6 d-inline">
                            <button type="button" className={`btn full-width ${loginSwitch ? 'btn-primary' : 'btn-light'}`}
                                onClick={(event) => setLoginSwitch(true)}
                            >
                                Login
                            </button>
                        </div>
                        <div className="col-sm-6 d-inline">
                            <button type="button" className={`btn full-width ${loginSwitch ? 'btn-light' : 'btn-success'}`}
                                onClick={(event) => setLoginSwitch(false)}
                            >
                                Register
                            </button>
                        </div>

                    </div>
                </div>



                <div className="tab-content mt-3">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <div className='form-login' >

                            <div className="form-outline mb-4">
                                <input type="text" id="loginName" className="form-control" placeholder="Username"
                                    onChange={(event) => setUserName(event.target.value)} />
                                <label className="form-label mt-1" htmlFor="loginName">Email or username</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password" id="loginPassword" className="form-control" placeholder="Password"
                                    onChange={(event) => setPasssWord(event.target.value)}
                                />
                                <label className="form-label mt-1" htmlFor="loginPassword">Password</label>
                            </div>


                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">

                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex justify-content-center">

                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>


                            <button className={`btn btn-block mb-4 ${loginSwitch ? 'btn-primary' : 'btn-success'}`}
                                onClick={loginSwitch ? onLoginBtn : onCreateBtn}
                            >{loginSwitch ? 'Sign in' : 'Create'}</button>


                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}