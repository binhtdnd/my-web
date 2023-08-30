import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: [],
    }

  };

  componentDidMount() {


    axios.get(`/api/noremember`, {
      params: {
        courses: window.location.pathname.slice(-2),
        listNoRemember: localStorage.getItem(window.location.pathname.slice(-2))
      }
    })
      .then(res => {
        const data = res.data;
        this.setState({ word: data.data });
      })
      .catch(error => console.log(error));

    let st = localStorage.getItem(window.location.pathname.slice(-2))

    if (!st) {


    } else {
      let temp = st.split(',')
      temp = temp.filter((value, index, array) =>
        array.indexOf(value) === index
      )
      localStorage.setItem(window.location.pathname.slice(-2), temp)
    }

  };
  onClickDeleteALL(e) {
    e.preventDefault();
    localStorage.removeItem(window.location.pathname.slice(-2));
    window.location.reload();
  }
  onClickDelete(e, stt) {

    let st = localStorage.getItem(window.location.pathname.slice(-2))
    let temp = st.split(',')

    temp = temp.filter((value, index, array) =>
      array.indexOf(value) === index
    )

    var index = temp.indexOf(stt.toString());
    temp.splice(index, 1);



    localStorage.setItem(window.location.pathname.slice(-2), temp)

    e.target.parentNode.parentNode.className = 'bHidden'
    e.preventDefault();
  }

  renderSwitch(param) {
    switch (param) {
      case '1':
        return 'I';
      case '2':
        return 'II';
      case '3':
        return 'III';
      case 'N':
        return 'Noun';
      case 'A':
        return 'Adjective';
      default:
        return '';
    }
  }

  render() {



    return (
      <>

        <table className='table root' >
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Nghĩa</th>
              <th scope='col'>Hiragana</th>
              <th scope='col'>Kanji</th>
              <td>
                <Link to='/'>
                  <button className='btn btn-warning'
                    onClick={(event) => this.onClickDeleteALL(event, item.stt)}
                  >Xóa Tất Cả </button>
                </Link>
              </td>


            </tr>
          </thead>

          <tbody>
            {this.state.word.map(item => (

              <tr className='tr-list-word ' key={item.stt}>
                <th scope='row'>{item.stt}</th>
                <td>{item.kanji}</td>
                <td>{item.hiragana}</td>
                <td>{item.mean}</td>
                <td><button type="button" className="btn btn-outline-warning"
                  onClick={(event) => this.onClickDelete(event, item.stt)}
                >Xóa</button></td>

              </tr>
            ))}



          </tbody>
        </table>
      </>
    )
  }
};

export default Word;