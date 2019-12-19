import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchReqAction} from '../../../store/actions';

class CheckReq extends Component {
  componentDidMount () {
    this.props.fetchReqAction (this.props.teacherId);
  }
  check = () => {
    if (this.props.req) {
      return <span> Requested by </span>;
    }
  };
  render () {
    return (
      <div>
        this.check()
      </div>
    );
  }
}
const mapStartToProps = state => {
  // console.log (state);
  return {
    teachers: state.teachers,
    req: state.req,
  };
};
export default connect (mapStartToProps, {fetchReqAction}) (CheckReq);
