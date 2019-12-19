import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import {connect} from 'react-redux';
import {teacherAddAction} from '../../../store/actions';

class TeacherAdd extends Component {
  // load = () => {
  //   return {
  //     // gender: 0,
  //     // s_l: 0,
  //   };
  // };
  // state = {data: {}};
  // componentDidMount () {
  //   this.setState (this.load);
  // }

  // renderInput = ({input, type, metal, children}) => {
  //   console.log ('TCL: TeacherAdd -> renderInput -> VVV', type);
  //   if (type === 'select') {
  //     // select Field
  //     return (
  //       <select {...input} className="custom-select">
  //         {children}
  //       </select>
  //     );
  //   } else if (type === 'file') {
  //     return <input {...input} type="file" />;
  //   } else return 0;
  // };

  onSubmit = formValues => {
    console.log ('TCL: onSubmit -> formValues', formValues);
    this.props.teacherAddAction (formValues, this.props.schoolId);
  };

  render () {
    return (
      <Form
        onSubmit={this.onSubmit}
        // initialValues={this.state.data}
      >
        {({handleSubmit, pristine, form, submitting, values}) => (
          <form onSubmit={handleSubmit} className="col s12">
            <div className="form-group">
              <h4 className="card-title">
                Add a new Doctor
              </h4>
              <Field
                type="text"
                name="name"
                component="input"
                placeholder="Name"
                className="input-text"
              />
              <Field
                type="text"
                name="avbl"
                component="input"
                placeholder="availabilitye"
                className="input-text"
              />
              <Field
                type="text"
                name="zip"
                component="input"
                placeholder="zip"
                className="input-text"
              />
              <div className="input-field col s12">
                <Field
                  name="gender"
                  component="select"
                  className="form-control"
                >
                  <option>Gender...</option>
                  <option value={false}>Men</option>
                  <option value={true}>Women</option>
                </Field>
              </div>
              <div className="input-field col s12">

                <Field name="i_q" component="select" className="form-control">
                  <option>Has surgical licence ? </option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Field>
              </div>

              <Field name="img" type="file" component="input" />
              <br />
              <br />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        )}
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    schoolId: state.firebase.auth.uid,
  };
};
export default connect (mapStateToProps, {teacherAddAction}) (TeacherAdd);
