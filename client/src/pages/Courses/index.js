import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      user: '',
    }
  };



  componentDidMount() {
    axios.get('/api/courses', {
      params: {
        foo: window.location.pathname.slice(-2)
      }
    })
      .then(res => {
        const data = res.data;
        this.setState({ courses: data.data });
      })
      .catch(error => console.log(error));

  };

  render() {

    return (

      <div className='row d-flex justify-content-center'>
        <div className='d-flex justify-content-center'>
          {this.state.courses.map(item => (

            <div className="card d-flex justify-content-center" key={item.stt} >
              <img className="card-img-top" src={item.img} alt="Card  cap" />
              <div className="card-body">

              </div>

              <hr className="divider" />
              <div className='item-ml-0 hidden'>
                <Link to={`/chiadongtu/v${item.name}`} >
                  <label className='lb lb-primary'>{`${window.location.pathname.slice(-2) === 'n3' ? '' : 'Chia Động Từ'}`}</label>
                </Link>
              </div>
              <hr className="divider" />

              <div className="row mb-2 inline">
                <div className="col-4 disabled">
                  <Link to={`/words/${item.name}`} className='disabled'>
                    <label className='lb lb-primary '>Từ Vựng</label>
                  </Link>
                </div>

                <div className="col-4">
                  <Link to={`/option-training/${item.name}`}>
                    <button className='btn btn-primary'>Luyện Tập</button>
                  </Link>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>

    )
  }
};

export default Courses;