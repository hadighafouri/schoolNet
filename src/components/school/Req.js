import React, {Component} from 'react';

export default class Req extends Component {
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
            <p>
              Your Request for
              <b>Dr. Jani</b> is Accepted by <b>Standord Hospital</b>
            </p>
            <p>
              He will work for your Hospital
              <b>Next Fri</b>
            </p>

          </p>
        </div>

        <div className="card-footer" />
      </div>
    );
  }
}
