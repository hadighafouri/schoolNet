import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOutAction} from '../store/actions/authAction';

class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">DoctorBank</Link>
          {/* {console.log (
            'TCL: Navbar -> render -> this.props.auth',
            this.props.auth
          )} */}

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.props.auth.isEmpty
              ? <span>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                  <li>
                    <Link to="/signUp">Sign Up</Link>
                  </li>
                </span>
              : <li>
                  <Link to="/" onClick={this.props.logOutAction}>Log Out</Link>
                </li>}
            <li>
              <Link to="/schoolProfile">Profile</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/Teachers">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  // console.log ('TCL: mapStateToProps -> state', state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect (mapStateToProps, {logOutAction}) (Navbar);
