import React, {Component} from 'react';
import {fetchTeacherByZipAction} from '../../../store/actions';
import {fetchTeacherAction} from '../../../store/actions';

import {connect} from 'react-redux';

export class Search extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-content">
          <div className="input-group mb-2">
            <div className="input-group-prepend" />
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Zip Code"
              onChange={e => {
                if (e.target.value.length >= 5)
                  this.props.fetchTeacherByZipAction (e.target.value);
                else if (e.target.value.length === 0)
                  this.props.fetchTeacherAction ();
              }}
            />
          </div>
        </div>
        <div className="col-auto" />
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Search
          </button>
        </div>
      </div>
    );
  }
}
export default connect (null, {fetchTeacherByZipAction, fetchTeacherAction}) (
  Search
);
