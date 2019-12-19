import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  render () {
    return (
      <div className="card">

        <img className="card-img" src={this.props.profile.img} />
        <div className="card-content">
          <h4>{this.props.profile.name}</h4>
          <h6>
            <p>Director: {this.props.profile.directorName}</p>
            <p>Address: {this.props.profile.address}</p>
            <p>zip: {this.props.profile.zip}</p>
          </h6>

        </div>

        <div className="card-action">
          <Link to="/teacherSearch">Edit Profile</Link>
        </div>
        <div className="card-action">
          <Link to="/teacher">
            Manage Doctores
          </Link>
        </div>
        <div className="card-action">
          <Link to="/teacherList">
            Find Doctors
          </Link>
        </div>
        <div className="card-action">
          <Link to="/req">
            Check Requests
          </Link>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    teachers: state,
  };
};

export default compose (
  connect (mapStateToProps),
  firestoreConnect ([{collection: 'schools'}])
) (Profile);
