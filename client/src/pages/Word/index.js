import React, { Component } from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: [],
    }

  };

  componentDidMount() {

    const courses = window.location.pathname.slice(-2)
    const st = localStorage.getItem(`w-${courses}`)
    const data = JSON.parse(st)
    this.setState({ word: data });


  };


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