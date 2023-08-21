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



    downloadWord(event) {
        var st = event.target.name
        axios.get(`/api/words/${st}`)
            .then(res => {
                const data = res.data;
                this.setState({
                    word: data.data
                });
            })
            .catch(error => console.log(error));

        window.localStorage.setItem(st + "isDownload", 'true')

        console.log('hhi ' + st)
        event.preventDefault()
    }

    render() {



        return (
            <div className='container mt-4'>

                <div >
                    <div className="row courses-product">

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
                    </div>

                </div>




            </div >
        )
    }
};

export default Home;