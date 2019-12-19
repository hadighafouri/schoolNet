import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTeacherAction} from '../../../store/actions';
import EditField from './EditField';
import MyDoc from './myDoc';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import CheckReq from './CheckReq';

class TeacherEdit extends Component {
  state = {editKey: null, teacherId: null};

  componentDidMount () {
    this.props.fetchTeacherAction ('bySchoolId', this.schoolId);
  }
  componentDidUpdate () {
    if (this.props.refresh) {
      console.log (
        'TCL: TeacherEdit -> componentDidUpdate -> this.props.refresh',
        this.props.refresh
      );
      this.props.fetchTeacherAction ('bySchoolId', this.schoolId);
    }
  }
  refresh = flag => {
    return flag === true ? this.setState ({editKey: null}) : null;
  };
  list = teachers => {
    return (
      teachers &&
      teachers.map (teacher => {
        // console.log (
        //   'TCL: TeacherEdit -> this.state.editKey',
        //   this.state.editKey
        // );
        if (teacher.schoolId === this.props.schoolId) {
          // this.setState ({teacherId: teacher.id});
          return this.state.editKey === teacher.id //=======selected field
            ? <EditField
                key={teacher.id}
                teacher={teacher}
                refresh={this.refresh}
              />
            : <div
                className="card"
                key={teacher.name}
                style={{maxWidth: '200px'}}
              >
                <img
                  // className="card-img-top"
                  className="card-img-top"
                  src={teacher.img}
                />
                <div className="card-body">
                  <h5 className="card-title">{teacher.name}</h5>
                  <p>
                    <label className="label">Gender: </label>
                    {teacher.gender === 'true' ? 'Women' : 'Men'}
                    <br />
                    <label className="label">Surgery licens: </label>
                    {teacher.i_q === 'true' ? 'Yes' : 'No'}
                    <br />
                    <label className="label">Available: </label>
                    {teacher.avbl}
                    <br />

                    <label className="label">Zip: </label>
                    {teacher.zip}
                    <br />

                    <button
                      type="button"
                      value={teacher.id}
                      onClick={e => this.setState ({editKey: e.target.value})}
                    >
                      Edit
                    </button>
                    <button>Delete</button>
                  </p>
                </div>
                <div className="card-f" />

                <div className="card-footer text-muted" />
                <CheckReq teacherId={teacher.id} />
              </div>;
        }
      })
    );
  };

  //-------------------------------------------------------RENDER
  render () {
    return (
      <div className="content">
        <h3>Doctors List:</h3>
        <div className="card-columns">
          {console.log (
            'TCL: TeacherEdit -> render -> this.props.teachers',
            this.props.teachers
          )}
          {this.list (this.props.teachers)}

          {/* <MyDoc /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // teachers: state.teachers,
    teachers: state.firestore.ordered.teachers,
    schoolId: state.firebase.auth.uid,
    refresh: state.refresh,
  };
};

export default compose (
  connect (mapStateToProps, {fetchTeacherAction}),
  firestoreConnect ([{collection: 'teachers'}])
) (TeacherEdit);
