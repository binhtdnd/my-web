import PropTypes from 'prop-types'
import { useState } from 'react';
import axios from 'axios';

async function loginUser(credentials) {


    return fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)

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

                if (response.data.data.length > 0) {
                    let role = response.data.data[0].role
                    const token = await loginUser({
                        username,
                        password,
                        role
                    });

                    setToken(token);
                } else {
                    alert('Sai tên đăng nhập hoặc Mật khẩu !!!')
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
            url: '/api/userForCreate',
            params: { username },
        }
        axios
            .request(options)
            .then(async function (response) {

                if (response.data.data.length === 0) {
                    const optionPost = {
                        method: 'GET',
                        url: '/api/createuser',
                        params: { username, password },
                    }
                    axios
                        .request(optionPost)
                        .then(async function (response) {
                            alert('Đã tạo thành công!')
                            setLoginSwitch(true)

                        })
                        .catch(function (error) {
                            console.error(error);

                        });

                } else {
                    alert('Tên đăng nhập đã tồn tại')
                }
            })
            .catch(function (error) {
                console.error(error);

            });
    }


    return (
        <>

            <div id='form-login' className='container mt-3'>


                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-sm-6 d-inline">
                            <button type="button" className={`btn full-width ${loginSwitch ? 'btn-primary' : 'btn-light'}`}
                                onClick={(event) => setLoginSwitch(true)}
                            >
                                Đăng nhập
                            </button>
                        </div>
                        <div className="col-sm-6 d-inline">
                            <button type="button" className={`btn full-width ${loginSwitch ? 'btn-light' : 'btn-success'}`}
                                onClick={(event) => setLoginSwitch(false)}
                            >
                                Đăng ký
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