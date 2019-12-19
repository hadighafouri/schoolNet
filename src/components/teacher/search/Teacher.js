import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addRegAction} from '../../../store/actions';

class Teacher extends Component {
  state = {
    addButtonActive: true,
  };

  onSubmit = e => {
    e.preventDefault ();
    let req = {
      toSchool: this.props.teacher.schoolId,
      fromSchool: this.props.schoolId,
      teacherId: this.props.teacher.id,
    };
    this.props.addRegAction (req);
    this.setState ({addButtonActive: false});
  };

  render () {
    return (
      <div className="card mb-3 bg-blue">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.props.teacher.img} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.teacher.name}</h5>
              <p className="card-text">
                <b>Hospital: </b>
                {this.props.teacher.schoolName}
                {console.log (
                  'TCL: Teacher -> render -> this.props.teacher',
                  this.props.teacher.schoolName
                )}
                <br />
                <b>Gender: </b>
                {this.props.teacher.gender === 'true' ? 'Women' : 'Men'}
                <br />
                <b>Surgery license:</b>
                {this.props.teacher.i_q === 'true' ? 'Yes' : 'No'}
                <br />
                <b>Available: </b>
                {this.props.teacher.avbl}
              </p>
              <form>
                <p className="card-text">
                  <small className="text-muted">{' '} </small>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.onSubmit}
                  >
                    Add
                  </button>

                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStartToProps = state => {
  // console.log (state);
  return {
    teachers: state.teachers,
    schoolId: state.firebase.auth.uid,
  };
};
export default connect (mapStartToProps, {addRegAction}) (Teacher);
