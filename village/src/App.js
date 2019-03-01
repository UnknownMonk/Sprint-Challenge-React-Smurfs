import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {}
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  };

  editSmurf = () => {
    const upDateSmurf = this.state.newSmurf;
    const id = this.state.newSmurf.id;
    axios
      .put(`http://localhost:3333/smurfs/${id}`, upDateSmurf)
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  };

  upDateSmurfs = id => {
    console.log(id);

    this.setState({
      newSmurf: id
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Route path="/smurf-form" component={SmurfForm} />
        <Route
          exact
          path="/"
          render={() => (
            <Smurfs
              upDateSmurfs={this.upDateSmurfs}
              deleteSmurf={this.deleteSmurf}
              smurfs={this.state.smurfs}
            />
          )}
        />
        {/* <form onSubmit={this.editSmurf}>
          <input
            value={this.state.newSmurf.name}
            onChange={this.upDateSmurfs}
          />
        </form> */}
      </div>
    );
  }
}

export default App;
