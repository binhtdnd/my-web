import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../.././App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            word: [],
            n5isDownload: window.localStorage.getItem('n5isDownload') === 'true' ? 'true' : 'false',
            n4isDownload: window.localStorage.getItem('n4isDownload') === 'true' ? 'true' : 'false',
            n3isDownload: window.localStorage.getItem('n3isDownload') === 'true' ? 'true' : 'false',
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



    render() {



        return (
            <div className='container mt-4'>
                {/* <div className="row courses-product">

                    {this.state.courses.map(item => (

                        <div className="col-sm-3 " name="col-sm" key={item.stt}>



                            <Link to={`/courses/${item.name}`} >
                                <div className="card home-card" >
                                    <img className="card-img-top" src={item.img} alt="Card  cap" />
                                    <div className="card-body">

                                    </div>
                                    <label className='label label-success'>
                                        <h5>    {item.price === 0 ? 'Free' : item.price + '$'}</h5>
                                    </label>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div> */}
                <div className='d-flex flex-column' id='app-container'>
                    <Link to='/courses/n5' ><button className='btn btn-success btn-courses'>N5</button></Link>
                    <Link to='/courses/n4' ><button className='btn btn-primary btn-courses'>N4</button></Link>
                    <Link to='/courses/n3' ><button className='btn btn-warning btn-courses'>N3</button></Link>
                </div>

            </div >
        )
    }
};

export default Home;