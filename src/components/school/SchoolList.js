import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSchoolsAction} from '../../store/actions';
import School from './School';

class SchoolList extends React.Component {
  componentDidMount () {
    this.props.fetchSchoolsAction ();
  }
  objToArr (obj) {
    let arr = Object.keys (obj).map (e => obj[e]);
    return arr;
  }

  render () {
    return (
      <div className="container">
        Schools:
        <div className="ui list">
          {this.objToArr (this.props.schools).map (e => <School school={e} />)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {schools: state.schools};
};
export default connect (mapStateToProps, {fetchSchoolsAction}) (SchoolList);
