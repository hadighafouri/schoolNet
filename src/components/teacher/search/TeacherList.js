import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchTeacherAction} from '../../../store/actions';
import {fetchSchoolsAction} from '../../../store/actions';

import Search from './Search'; //component

import Teacher from './Teacher'; //component

class TeacherList extends React.Component {
  componentDidMount () {
    this.props.fetchSchoolsAction ();
    this.props.fetchTeacherAction ();
  }
  list (teachers) {
    if (teachers != null) {
      return teachers.map (e => {
        // console.log ('TCL: TeacherList -> list -> e', e);
        return <Teacher key={e.id} teacher={e} />;
      });
    }
  }

  render () {
    let bg = require ('./1.jpg');
    return (
      <div className="container bg-light">
        <div className="row justify-content-around">
          <div className="col-lg-1-12">
            <h5 className="card-header">
              Doctors and Nurses:
            </h5>
            <div className="ui list">
              {this.list (this.props.teachers)}
            </div>
          </div>
          <div className="col-lg-1-12">
            <br />
            <br />
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log ('TCL: state.teachers', state.teachers);
  return {teachers: state.teachers.teachers};
};
export default connect (mapStateToProps, {
  fetchTeacherAction,
  fetchSchoolsAction,
}) (TeacherList);
