import { Link } from "react-router-dom";
import { Component } from "react";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loging: true
        }

    };

    logOut() {
        this.setState({
            loging: false
        })
    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Alice v1.2</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login2">Link <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" href='/#'>Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <img id='avatar-icon' src={`${this.state.loging ? '/img/avatar-icon-in.png' : '/img/avatar-icon.png'}`} className="rounded-circle"
                                            alt='' />
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className={`dropdown-item ${this.state.loging ? '' : 'bHidden'}`} href="/#">Action</a>
                                        <a className={`dropdown-item ${this.state.loging ? '' : 'bHidden'}`} href="/#">Infor</a>
                                        <div className={`dropdown-divider ${this.state.loging ? '' : 'bHidden'}`}></div>
                                        <a className={`dropdown-item ${this.state.loging ? '' : 'bHidden'}`} href="/#" onClick={this.logOut.bind(this)}>Logout</a>
                                        <Link to='/login' className={`dropdown-item ${this.state.loging ? 'bHidden' : ''}`} href="/#">Login</Link>
                                    </div>
                                </li>
                                <li>



                                </li>
                            </ul>
                        </form>

                    </div>
                </nav>



            </div>
        );
    }
}

export default Header;