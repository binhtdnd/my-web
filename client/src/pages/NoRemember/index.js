import React, { Component } from 'react';
import axios from 'axios';

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


  };



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

            </tr>
          </thead>

          <tbody>
            {this.state.word.map(item => (

              <tr className='tr-list-word' key={item.stt}>
                <th scope='row'>{item.stt}</th>
                <td>{item.kanji}</td>
                <td>{item.hiragana}</td>
                <td>{item.mean}</td>

              </tr>
            ))}



          </tbody>
        </table>
      </>
    )
  }
};

export default Word;