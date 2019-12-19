import React from 'react';
import {connect} from 'react-redux';
import {updateTeacherAction} from '../../../store/actions';
import {Form, Field} from 'react-final-form';

class EditField extends React.Component {
  load = () => {
    return {
      schoolId: this.props.teacher.schoolId,
      teacherId: this.props.teacher.id,
      name: this.props.teacher.name,
      avbl: this.props.teacher.avbl,
      i_q: this.props.teacher.i_q === true ? true : false,
      gender: this.props.teacher.gender,
      zip: this.props.teacher.zip,
    };
  };

  state = {data: {}};
  componentDidMount = () => {
    console.log (
      'TCL: EditField -> componentDidMount -> this.state.editKey',
      this.state.editKey
    );
    // console.log ('TCL: EditField -> load -> this.props', this.props);
    let data = this.load ();
    this.setState ({data});
  };
  // renderInput = ({input, metal, type, children, placeholder, checked}) => {
  //   if (type === 'select') {
  //     return (
  //       <select {...input} className="custom-select">
  //         {children}
  //       </select>
  //     );
  //   } else if (type === 'checkbox') {
  //     return <input type={type} {...input} />;
  //   } else return <input type={type} {...input} />;
  // };
  onSubmit = values => {
    // console.log ('TCL: EditField -> renderInput -> Values', values);
    this.props.updateTeacherAction (values, this.props.teacher.id);
    console.log ('TCL: EditField -> //renderInput -> values', values);
    this.props.refresh (true);
  };

  render () {
    return (
      <Form initialValues={this.state.data} onSubmit={this.onSubmit}>
        {({handleSubmit, values, submitting}) => (
          <form className="form" onSubmit={handleSubmit}>
            <div
              className="card"
              key={this.props.teacher.id}
              // style={{maxWidth: '200px'}}
            >
              {/* <img
                className="card-img-top"
                src={this.props.teacher.img}
                style={{maxWidth: '400px'}}
              /> */}
              <div className="card-body">
                <label className="label">
                  Name:
                </label>
                <Field name="name" component="input" type="text" />
                {/* </h5> */}
                <p>
                  <label className="label">
                    Gender:
                  </label>
                  <Field
                    name="gender"
                    component="select"
                    className="form-control"
                  >
                    <option>Gender...</option>
                    <option value={false}>Man</option>
                    <option value={true}>Women</option>
                  </Field>
                  <br />
                  <label className="label">
                    Surgery licens:
                  </label>
                  <Field name="i_q" component="select" className="form-control">
                    <option>Surgery licens...</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Field>
                  <br />
                  <label className="label">
                    Availability:
                  </label>
                  <Field name="avbl" type="text" component="input" />
                  <br />
                  <label className="label">
                    Zip Code:
                  </label>
                  <Field
                    name="zip"
                    type="text"
                    placeholder="Zip Code"
                    component="input"
                  />
                  <br />

                  <button
                    type="submit"
                    disabled={submitting}
                    // value={this.props.teacher.id}
                    // onClick={e => this.onSubmit (values)}
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    value={this.props.teacher.id}
                    // onClick={e => this.onSubmit}
                  >
                    Cansel
                  </button>
                </p>
                <div className="card-footer">
                  {/* <pre>{JSON.stringify (values, undefined, 2)}</pre> */}
                </div>
              </div>
            </div>

          </form>
        )}
      </Form>
    );
  }
}

export default connect (null, {updateTeacherAction}) (EditField);
