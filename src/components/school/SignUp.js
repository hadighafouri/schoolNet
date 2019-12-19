import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import {connect} from 'react-redux';
import {signUpAction} from '../../store/actions/authAction';
import {Redirect} from 'react-router-dom';

class SignUp extends Component {
  onSubmit = values => {
    console.log ('TCL: SignUp -> values', values);
    this.props.signUpAction (values);
  };
  render () {
    if (!this.props.auth.isEmpty) {
      return <Redirect to="/schoolProfile" />;
    }
    return (
      <div className="form-group bg-light">
        <Form onSubmit={this.onSubmit}>
          {({handleSubmit}) => (
            <form onSubmit={handleSubmit} className="needs-validation">

              <div className="col-md-4 mb-3">
                <Field
                  component="input"
                  name="schoolName"
                  placeholder="Hospital Name"
                />

              </div>
              <div className="col-md-4 mb-3">
                <Field
                  component="input"
                  name="directorName"
                  placeholder="Director Name"
                />
              </div>
              <div className="col-md-4 mb-3">

                <Field component="input" name="email" placeholder="Email" />
              </div>
              <div className="col-md-4 mb-3">

                <Field
                  component="input"
                  name="password"
                  placeholder="Password"
                />
              </div><div className="col-md-4 mb-3">

                <Field component="input" name="address" placeholder="Address" />
              </div>
              <div className="col-md-4 mb-3">
                <Field component="input" name="zip" placeholder="Zip Code" />
              </div>
              <button className="btn waves-effect waves-light" type="submit">
                Sign Up
              </button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {auth: state.firebase.auth};
};
export default connect (mapStateToProps, {signUpAction}) (SignUp);
