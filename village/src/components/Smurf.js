import React from 'react';

const Smurf = props => {
  return (
    <div style={SmurfCard} className="Smurf">
      <img style={imgSize} src={props.img} alt="smurf" />
      <h3 style={CardFont}>{props.name}</h3>

      <p style={CardFont}>{props.age} smurf years old</p>
      <strong>{props.height} tall</strong>
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

const SmurfCard = {
  backgroundColor: 'rgba(240,255,255,.8)',
  border: '1px solid lightBlue',
  borderRadius: '5%',
  padding: '10px'
};
const CardFont = {
  margin: '2px 0'
};
const imgSize = {
  width: '150px',
  height: '150px'
};

export default Smurf;
