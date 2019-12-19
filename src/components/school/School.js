import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class School extends Component {
  render () {
    return (
      <div className="item">
        <img className="ui avatar image" src={this.props.school.img} />
        <div className="content">
          <Link className="header" patch="/">{this.props.school.name}</Link>

          <div class="description">
            <b>Director:</b>{this.props.school.director}
            <button type="button" className="btn btn-primary">
              <Link to="/TeacherList">
                Teachers
              </Link>
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default School;
