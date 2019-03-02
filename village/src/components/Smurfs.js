import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Smurf Village</h1>
        <ul style={Smurfs2}>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                smurf={smurf}
                upDateSmurfs={this.props.upDateSmurfs}
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                img={smurf.img}
                key={smurf.id}
              />
            );
          })}
        </ul>
        <form>
          <input
            value={this.props.imValue.name}
            onChange={this.props.handleChanges}
            name="name"
            type="text"
          />
          <button type="submit" onClick={this.props.editSmurf}>
            send
          </button>
        </form>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

const Smurfs2 = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
};

export default Smurfs;
