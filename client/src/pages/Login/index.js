import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom'
import '../.././App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: true,
            userName_S: '',
            passWord_S: '',
        }

    };

    componentDidMount() {
        axios.get('/api/courses')
            .then(res => {
                const data = res.data;
                this.setState({
                    courses: data.data

                });
            })
            .catch(error => console.log(error));

    };

    handleSubmit(e) {
        console.log(e.target)

        e.preventDefault()
    }
    btnLogin(e) {

        this.setState({
            switch: true
        })
    }
    btnRegister() {
        this.setState({
            switch: false
        })
    }


    render() {



        return (
            <div id='form-login' className='container mt-3'>


                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-sm-6 d-inline">
                            <button type="button" className={`btn full-width ${this.state.switch ? 'btn-primary' : 'btn-light'}`}
                                onClick={this.btnLogin.bind(this)}
                            >
                                Login
                            </button>
                        </div>
                        <div className="col-sm-6 d-inline">
                            <button type="button" className={`btn full-width ${this.state.switch ? 'btn-light' : 'btn-success'}`}
                                onClick={this.btnRegister.bind(this)}
                            >
                                Register
                            </button>
                        </div>

                    </div>
                </div>



                <div className="tab-content mt-3">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form className='form-login' onSubmit={this.handleSubmit}>

                            <div className="form-outline mb-4">
                                <input type="email" id="loginName" className="form-control" placeholder="Username" />
                                <label className="form-label mt-1" htmlFor="loginName">Email or username</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password" id="loginPassword" className="form-control" placeholder="Password" />
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


                            <button className={`btn btn-block mb-4 ${this.state.switch ? 'btn-primary' : 'btn-success'}`}

                            >{this.state.switch ? 'Sign in' : 'Create'}</button>


                        </form>
                    </div>


                </div>
            </div>

        )
    }
};

export default Login;