import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sp1: '1',
      sp2: '2',
      txt1: '暗証番号',
      txt2: 'あんしょうばんごう',
      ip1: '1',
      ip2: '50',
      courses: window.location.pathname.slice(-2),
      tempWord: ['', '暗証番号', 'あんしょうばんごう', 'Mã số định danh cá nhân']
    }

  };




  setTxt(d) {
    if (d === '1') {
      return this.state.tempWord[1];
    } else if (d === '2') {
      return this.state.tempWord[2];
    } else if (d === '3') {
      return this.state.tempWord[3];
    }
  }

  onChangeSp1(event) {
    var temp1 = event.target.value;
    this.setState({
      sp1: temp1,
      txt1: this.setTxt(temp1)
    })
    //alert(this.setTxt(temp1))
  }

  onChangeSp2(event) {
    var temp2 = event.target.value;
    this.setState({
      sp2: temp2,
      txt2: this.setTxt(temp2)
    })
    //alert(this.setTxt(temp2))
  }

  onChangeIp1(event) {
    if (event.target.value.length <= 0 || !Number.isInteger(parseInt(event.target.value))) {
      alert("value of From must be greater than 0, please choose again")
      event.target.value = 1
    }

    if (parseInt(event.target.value) <= 0) {
      alert("value of From must be greater than 0, please choose again")
      event.target.value = 1
    }

    if (this.state.ip2 - parseInt(event.target.value) <= 3) {
      alert("from - to must be greater than 5, please choose again")
      event.target.value = 1
    }

    this.setState({
      ip1: event.target.value
    })


  }
  onChangeIp2(event) {

    if (event.target.value.length <= 0 || !Number.isInteger(parseInt(event.target.value))) {
      alert("Not int value of From must be greater than 0, please choose again")
      event.target.value = 50
    }

    if (parseInt(event.target.value) <= 0) {
      alert("value of From must be greater than 0, please choose again")
      event.target.value = 50
    }

    if (parseInt(event.target.value) - this.state.ip1 <= 3) {
      alert("from - to must be greater than 5, please choose again")
      event.target.value = 50
    }

    this.setState({
      ip2: event.target.value
    })

  }


  render() {


    return (

      <div className="container mt-4 " >
        <form method="GET" onSubmit={(e) => { this.doSomething() }}>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-4 p-3 mb-2 bg-primary text-white">

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <select className="selectpicker mt-2" id="sp1" name="spQuestion" onChange={this.onChangeSp1.bind(this)}>
                      <option value="1">Kanji</option>
                      <option value="2">Hiragana</option>
                      <option value="3">Việt Nam</option>
                    </select>
                  </li>

                  <li className="list-group-item">
                    <select className="selectpicker mt-2" id="sp2" name="spAnswer" onChange={this.onChangeSp2.bind(this)} >
                      <option value="2">Hiragana</option>
                      <option value="1">Kanji</option>
                      <option value="3">Việt Nam</option>
                    </select>
                  </li>

                </ul>

                <div className="inline mt-2">
                  <label className='ml-1'>From</label>
                  <input value={this.state.ip1} name="ip1 input ml-1" className='input ml-1' onChange={this.onChangeIp1.bind(this)} />
                </div>
                <div className="inline mt-2">
                  <label className='ml-1'> To </label>
                  <input value={this.state.ip2} name="ip1 input ml-2" className='input ml-1' onChange={this.onChangeIp2.bind(this)} />
                </div>

              </div>

              <div className="col-sm-4 p-3 mb-2 bg-secondary text-white">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item mt-2" id="txt1">{this.state.txt1}</li>
                  <li className="list-group-item mt-2" id="txt2">{this.state.txt2}</li>
                </ul>
              </div>
            </div>


          </div>
        </form >

        <Link to={`/training/${this.state.sp1}-${this.state.sp2}-${this.state.ip1 - 1}-${this.state.ip2 - 1}-${this.state.courses}`}>
          <h2>Go </h2>
        </Link>



      </div >
    )
  }
};

export default Training;



