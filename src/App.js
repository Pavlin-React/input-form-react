import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor( props ) {
    super ( props )

    this.state = {
      name  : '',
      email : '',
      gender: ''
    }
  }

  handleInput = ( event ) => {
    this.setState( { [event.target.id]: event.target.value } )
  }

  handleSubmit = ( event ) => {
    event.preventDefault()
    console.log( this.state );
  }

  render() {
    return(
      <div className='App' style={{ padding: 25 }}>
        <form onSubmit={ this.handleSubmit }>
          <input
            value={ this.state.name }
            onChange={ this.handleInput }
            id = 'name'
            type = 'text'
            placeholder = 'name'
          />
          <input
          value={ this.state.email }
          onChange={ this.handleInput }
          id='email'
          type='text'
          placeholder='email'
          />
          <br />
          
          <select id='gender' value={ this.state.gender } onChange={ this.handleInput }>
            <option value=''></option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          
          <br />
            <input type='submit' value='Submit'/>
        </form>
        <div style={ { textAlign: 'left' } }>
          <p>
            <b>name:{ this.state.name }</b>
          </p>
          <p>
            <b>email:{ this.state.email }</b>
          </p>
          <p>
            <b>gender:{ this.state.gender }</b>
          </p>
        </div>
      </div>
    )
  }
}


export default App;
