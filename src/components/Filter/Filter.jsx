import React, { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    return (
      <div>
      
        <label>
          <p>Find contacts by name: </p>
          <input type="text"></input>
        </label>
      </div>
    );
  }
}
