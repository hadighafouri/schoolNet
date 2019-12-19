import React, {Component} from 'react';
import TeacherAdd from './TeacherAdd';
import TeacherEdit from './TeacherEdit';

export default class Teacher extends Component {
  render () {
    return (
      <div className="content bg-light">
        <TeacherAdd />
        <TeacherEdit />
      </div>
    );
  }
}
