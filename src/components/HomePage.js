import React from 'react';
// import bg from '../imgCSS/1.jpg';
import {Link} from 'react-router-dom';

// var sectionStyle = {
//   backgroundImage: `url(${bg})`,
// };

const HomePage = () => {
  return (
    // <div className="container">
    (
      <div>
        <p className="grey-text text-darken-3 lighten-3">
          <h3>WellCome to DoctorBank</h3>

          <h4>
            <Link to="/login">Plese Login</Link>
          </h4>
          <h4>or</h4>
          <h4>
            <Link to="/signUp">Sign Up</Link>
          </h4>
        </p>
      </div>
    )
  );
};

export default HomePage;
