import PropTypes from 'prop-types'
import { useState } from 'react';
import axios from 'axios';

async function loginUser(credentials) {
    alert('cre: ', credentials)
    return fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),

    })
        .then(data => data.json())
}

export default function Login3({ setToken }) {


    const [username, setUserName] = useState(1);
    const [password, setPasssWord] = useState(2);





    const handleSubmit = async e => {
        e.preventDefault();

        // axios.get('/api/user', {

        // })
        //     .then(res => {
        //         const data = res.data;
        //         console.log(data)
        //     })
        //     .catch(error => console.log(error));



        const token = await loginUser({
            username,
            password
        });



        setToken(token);
        
    }


    return (
        <div>
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
    );
}

Login3.propTypes = {
    setToken: PropTypes.func.isRequired
}