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
            downloading: true,
        }

    };

    componentDidMount() {

        if (
            !localStorage.hasOwnProperty('w-n5') ||
            !localStorage.hasOwnProperty('w-n4') ||
            !localStorage.hasOwnProperty('w-n3') ||
            !localStorage.hasOwnProperty('w-vn5') ||
            !localStorage.hasOwnProperty('w-vn4')
        ) {

            document.querySelector('[data-target="#exampleModal"]').click();
        }

        // this.getWords('n5')
        // this.getWords('n4')
        // this.getWords('n3')
        // this.getWords('vn5')
        // this.getWords('vn4')

        this.downloadData()
        // this.getWordsMong('n5')
        // this.getWordsMong('n4')
        // this.getWordsMong('n3')
        // this.getWordsMong('vn5')
        // this.getWordsMong('vn4')
    };
    closeModel(e) {
        if (localStorage.hasOwnProperty('w-n5') &&
            localStorage.hasOwnProperty('w-n4') &&
            localStorage.hasOwnProperty('w-n3') &&
            localStorage.hasOwnProperty('w-vn5') &&
            localStorage.hasOwnProperty('w-vn4')
        ) {
            document.querySelector('#dismissModal').click()
        }
        window.location.reload();

    }
    downloadData() {
        axios.get(`/api/downloadData`, {

        })
            .then(res => {
                const n5 = res.data.n5;
                const n4 = res.data.n4;
                const n3 = res.data.n3;
                const vn4 = res.data.vn4;
                const vn5 = res.data.vn5;
                // console.log('data from client: ', data)
                // localStorage.setItem(`w-${courses}`, JSON.stringify(data))

                localStorage.setItem('w-n5', JSON.stringify(n5))
                localStorage.setItem('w-n4', JSON.stringify(n4))
                localStorage.setItem('w-n3', JSON.stringify(n3))
                localStorage.setItem('w-vn5', JSON.stringify(vn5))
                localStorage.setItem('w-vn4', JSON.stringify(vn4))
            })
            .catch(error => console.log(error));

    }
    getWordsMong(courses) {

        if (!localStorage.hasOwnProperty(`w-${courses}`) || true) {

            axios.get(`/api/wordsMong`, {
                params: {
                    courses: courses,
                }
            })
                .then(res => {
                    const data = res.data.data;
                    console.log('data from client: ', data)
                    localStorage.setItem(`w-${courses}`, JSON.stringify(data))
                })
                .catch(error => console.log(error));
        }
    }

    getWords(courses) {
        if (!localStorage.hasOwnProperty(`w-${courses}`)) {
            axios.get(`/api/words`, {
                params: {
                    courses: courses,
                }
            })
                .then(res => {
                    const data = res.data.data;

                    localStorage.setItem(`w-${courses}`, JSON.stringify(data))
                })
                .catch(error => console.log(error));
        }
    }
    btnUpdate(e) {
        e.preventDefault()
        localStorage.removeItem('w-n5');
        localStorage.removeItem('w-n4');
        localStorage.removeItem('w-n3');
        localStorage.removeItem('w-vn5');
        localStorage.removeItem('w-vn4');
        window.location.reload();
    }
    btnTest(e) {
        e.preventDefault()
        this.getWordsMong('n5')
        //window.location.reload();
    }
    render() {

        return (
            <div className='container mt-4'>

                <div className='d-flex flex-column' id='app-container'>
                    <Link to='/courses/n5' ><button className='btn btn-success btn-courses'>N5</button></Link>
                    <Link to='/courses/n4' ><button className='btn btn-primary btn-courses'>N4</button></Link>
                    <Link to='/courses/n3' ><button className='btn btn-warning btn-courses'>N3</button></Link>

                    <div>
                        <button className='btn btn-danger btn-courses'
                            onClick={(e) => { this.btnUpdate(e) }}
                        >
                            Update
                        </button>
                    </div>
                    <div>
                        <button className='btn btn-danger btn-courses'
                            onClick={(e) => { this.btnTest(e) }}
                        >
                            Test
                        </button>
                    </div>
                </div>



                <button type="button" className="bHidden btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>

                            </div>
                            <div className="modal-body">
                                <i className='	fa fa-coffee'></i>
                                <p>
                                    Lần truy cập đầu tiên Web cần tải dữ liệu<br></br>
                                    Vui lòng chờ trong giây lát...
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button id='dismissModal' type="button" className="bHidden btn btn-secondary" data-dismiss="modal">Close</button>

                                <button type="button" className="btn btn-primary"
                                    onClick={(event) => this.closeModel(event)}
                                >Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        )
    }
};

export default Home;