
import React, { Component } from 'react';
import axios from 'axios';
//import $ from 'jquery';

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sp1: '',
      sp2: '',
      txt1: '暗証番号',
      txt2: 'あんしょうばんごう',
      ipStart: '',
      ipEnd: '',
      ip1: 0,
      ip2: '',
      courses: window.location.pathname,
      tempWord: ['', '暗証番号', 'あんしょうばんごう', 'Mã số định danh cá nhân'],

      step: 0,
      question: '',
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      stateKanji: [],
      stateHiragana: [],
      stateMean: [],
      check: 0,
      pass: true,
      scount: 0,
      noRemember: []
    }

  };

  afterSetStateFinished() {

    const rd = this.getRandomIntInclusive(1, 4)
    this.setState({
      question: this.getTxt(this.state.step, this.state.sp1, false),
      a1: this.getTxt(this.state.step, this.state.sp2, true),
      a2: this.getTxt(this.state.step, this.state.sp2, true),
      a3: this.getTxt(this.state.step, this.state.sp2, true),
      a4: this.getTxt(this.state.step, this.state.sp2, true),
      check: rd,
      ['a' + rd]: this.getTxt(this.state.step, this.state.sp2, false),
    })

  }

  componentDidMount() {
    var slink = window.location.pathname.substring(10)
    var sString = slink.split('-')

    this.setState({
      sp1: sString[0],
      sp2: sString[1],
      ip1: Number.parseInt(sString[2]),
      ip2: sString[3],
      courses: sString[4],
      noRemember: localStorage.getItem(sString[4]),
    })



    axios.get(`/api/words`, {
      params: {
        courses: sString[4],
        sp1: sString[0],
        sp2: sString[1],
        ip1: sString[2],
        ip2: sString[3],
      }
    })

      .then(res => {

        let lKanji = []
        let lHiragana = []
        let lMean = []
        const data = res.data;
        let lcount = 0;
        data.data.forEach(element => {


          lKanji.push(element.kanji)
          lHiragana.push(element.hiragana)
          lMean.push(element.mean)
          lcount++
        });
        if (this.state.sp1 === '1') {
          lKanji.push("Hết rồi, F5 đi, bấm gì nữa")
        } else if (this.state.sp1 === '2') {
          lHiragana.push("Hết rồi, F5 đi, bấm gì nữa")
        } if (this.state.sp1 === '3') {
          lMean.push("Hết rồi, F5 đi, bấm gì nữa")
        }




        this.setState({

          stateKanji: lKanji,
          stateHiragana: lHiragana,
          stateMean: lMean,
          scount: lcount,
        }, () => {
          this.afterSetStateFinished();
        }
        );


      })
      .catch(error => console.log(error));

  };

  subtract(a, b) {
    return (a - b);
  }

  onClickSave(e) {
    // console.log(parseInt(this.state.step) + parseInt(this.state.ip1))
    let st = localStorage.getItem(window.location.pathname.slice(-2))

    if (!st) {
      localStorage.setItem(this.state.courses, this.state.step + this.state.ip1)
    } else {
      let temp = st.split(',')

      temp.push(this.state.step + this.state.ip1)
      localStorage.setItem(this.state.courses, temp)
    }

    e.preventDefault();
  }
  onClickBack(e) {
    this.setState({
      step: this.state.step - 1
    }, () => {
      this.afterSetStateFinished();
    })

    e.preventDefault();
  }

  onClickBtn1(event, param) {

    if (this.checkAnswer(this.state.check, param)) {

      this.setState({
        step: this.state.step + 1
      }, () => {
        this.afterSetStateFinished();
      })
    } else {

      this.setState({
        pass: false
      }, () => {
        setTimeout(function () {
          this.setState({
            pass: true
          })
        }.bind(this), 1000);
      }
      );
    }
    event.preventDefault();
  }



  checkAnswer(checked, answer) {
    if (parseInt(checked) === parseInt(answer)) {
      return true
    } else {
      return false
    }
  }

  getTxt(step, where, isRd) {
    let st = parseInt(step)
    let wh = parseInt(where)
    let word = ''

    if (isRd) {
      do {
        st = this.getRandomIntInclusive(0, this.state.scount)
      } while (parseInt(st) === parseInt(step) || parseInt(st) === parseInt(this.state.rd));
    }

    if (wh === 1) {
      word = this.state.stateKanji[st]
    } else if (wh === 2) {
      word = this.state.stateHiragana[st]
    } else if (wh === 3) {
      word = this.state.stateMean[st]
    }

    return word
  }



  getRandomIntInclusive(min, max) {

    min = Math.ceil(parseInt(min));
    max = Math.floor(parseInt(max));

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {




    return (
      <div className='container ' id='training-content'>

        <div className='radio-container' >

          <div >
            <span className="radio-left" id='span-question' >
              {this.state.question}
            </span>
          </div>


          <div className="form-check div-inputRadio radio-left" onClick={(event) => this.onClickBtn1(event, 1)}>
            <label className="form-check-label" >
              {this.state.a1}
            </label>
          </div>

          <div className="form-check  div-inputRadio radio-left" onClick={(event) => this.onClickBtn1(event, 2)}>
            <label className="form-check-label">
              {this.state.a2}
            </label>
          </div>

          <div className="form-check div-inputRadio radio-left" onClick={(event) => this.onClickBtn1(event, 3)}>
            <label className="form-check-label">
              {this.state.a3}
            </label>
          </div>

          <div className="form-check div-inputRadio radio-left" onClick={(event) => this.onClickBtn1(event, 4)}>
            <label className="form-check-label">
              {this.state.a4}
            </label>
          </div>


          <span className="badge badge-warning radio-left">{this.state.pass === true ? "" : 'Sai !!!'}</span>
          <span className="badge badge-danger radio-left">{this.state.step - (this.state.ip2 - this.state.ip1) > 1 ? 'Đã bảo hết rồi (◣_◢)' : ''}</span>
        </div>

        <div className='footer-btn d-flex justify-content-between mt-5'>
          <button className='btn btn-primary' onClick={(event) => this.onClickBack(event)}>Quay Lại</button>
          <button className='btn btn-success' onClick={(event) => this.onClickSave(event)}>Lưu Lại</button>
        </div>



      </div >
    )
  }
};

export default Training;