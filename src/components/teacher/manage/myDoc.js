import React from 'react';
import {Redirect} from 'react-router-dom';

export default class MyDoc extends React.Component {
  render () {
    return (
      <div className="card" style={{maxWidth: '200px'}}>
        <img
          // className="card-img-top"
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6ojRU24NEJwZYuj4HvQlKKM_IZ_1dT3D7jJjxxTjcTx0qdIM"
        />
        <div className="card-body">
          <h5 className="card-title">Dr. Jani</h5>
          <p>
            <label className="label">Gender: </label>
            Man
            <br />
            <label className="label">Surgery licens: </label>
            Yes
            <br />
            <label className="label">Available: </label>
            Next Friday
            <br />

            <label className="label">Zip: </label>
            94542
            <br />

            <button type="button" onClick={<Redirect to="/schoolProfile" />}>
              Accept
            </button>

            <button onClick={<Redirect to="/schoolProfile" />} type="button">
              Reject
            </button>
          </p>
        </div>

        <div className="card-footer" />
      </div>
    );
  }
}
