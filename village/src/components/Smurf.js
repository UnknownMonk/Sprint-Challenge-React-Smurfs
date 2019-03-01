import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <img style={imgSize} src={props.img} alt="" />
      <div>
        <button onClick={() => props.deleteSmurf(props.id)}>x</button>
        <button onClick={() => props.upDateSmurfs(props.smurf)}>edit</button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

const imgSize = {
  width: '200px',
  height: '200px'
};

export default Smurf;
