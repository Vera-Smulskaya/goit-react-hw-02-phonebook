import React, { Component } from 'react';
import css from './Title.module.css'

export default class Filter extends Component {
  render() {
    return (
      <h2>
        {this.props.children}
      </h2>
    );
  }
}

