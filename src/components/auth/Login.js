import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authAction} from '../../store/actions/authAction';
import {Form, Field} from 'react-final-form';
import {Redirect} from 'react-router-dom';
class Login extends Component {
  state = {
    loading: false,
  };
  renderInput = ({input, label, _placeholder, _id, _type, meta}) => {
    return (
      <div className="form-group" style={{width: '500px'}}>
        <label htmlFor="exampleInputEmail1">{label}</label>
        <input
          {...input}
          className="form-control"
          type={_type}
          id={_id}
          placeholder={_placeholder}
          // aria-describedby="emailHelp"
        />
      </div>
    );
  };

  onSubmit = values => {
    console.log ('TCL: values', values);
    this.props.authAction (values);
  };

  render () {
    // {
    //   !this.props.auth.isEmpty ? <Redirect to="/Teacher" /> : null;
    // }
    if (!this.props.auth.isEmpty) {
      return <Redirect to="/schoolProfile" />;
    }
    return (
      // <div className="className=&quot;card blue-grey darken-1">
      (
        <Form onSubmit={this.onSubmit}>
          {({handleSubmit, values, submitting}) => (
            <form onSubmit={handleSubmit} className="col s12">
              {this.state.loading && <div className="circle-clipper left" />}
              <Field
                name="email"
                component="input"
                placeholder="Email"
                className="validate"
              />
              <Field name="password" component="input" placeholder="pass" />
              <button
                className="btn waves-effect waves-light"
                type="submit"
                // onClick={this.onSubmit ()}
              >
                Login
              </button>
            </form>
          )}
        </Form>
      )
      // </div>
    );
  }
}
const mapStateToProps = state => {
  console.log ('TCL: state', state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect (mapStateToProps, {authAction}) (Login);
//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------
